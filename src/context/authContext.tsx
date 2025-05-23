import React, { createContext, ReactNode, useContext, useState } from "react";

type AuthContextType = {
    authToken: string | null;
    setToken: React.Dispatch<React.SetStateAction<string | null>>;
}
type AuthProps = {
    children: ReactNode
}
export const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const useAuthContext = () => {
    const context = useContext(AuthContext)
    if (!context) {
        throw new Error("Use Context must be within a AuthContext Provider")
    }
    return context

}

export const AuthContextProvider = ({ children }: AuthProps) => {

    const storedToken = localStorage.getItem("accessToken")

    const parsedToken = storedToken ? JSON.parse(storedToken) : null

    const [authToken, setToken] = useState<string | null>(parsedToken)
    return (
        <AuthContext.Provider value={{ authToken, setToken }}>
            {children}
        </AuthContext.Provider>
    )
}