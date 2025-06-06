import { create } from "zustand";

interface ConversationState {
    selectedConversation: any;
    setSelectedConversation: (selectedConversation: any) => void;
    messages: any[];
    setMessages: (messages: any[]) => void;
}

const useConversation = create<ConversationState>((set) => ({
    selectedConversation:{},
    setSelectedConversation: (selectedConversation) => set({ selectedConversation }),
    messages: [],
    setMessages: (messages) => set({ messages }),


}))

export default useConversation