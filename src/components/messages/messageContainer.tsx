import { TiMessages } from "react-icons/ti";
import useConversation from "../../zustand/useConversation";
import MessageInput from "./messageInput";
import Messages from "./messages";

interface MessageContainerProps {
    mobileView?: boolean;
}

const MessageContainer = ({ mobileView }: MessageContainerProps) => {
    const { selectedConversation, setSelectedConversation } = useConversation();

    return (
        <div className="flex flex-col h-full min-h-0 w-full md:w-2/3">
            {selectedConversation ? (
                <>
                    {/* Header with back button in mobile view */}
                    <div className="bg-slate-500 px-4 py-2 border-b  flex items-center justify-around">
                        {mobileView && (
                            <button
                                onClick={() => setSelectedConversation(null)}
                                className="mr-2 font-extrabold cursor-pointer text-white focus:outline-none"
                            >
                                BACK
                            </button>
                        )}
                        <span className="label-text text-white">To:
                            <span className="text-gray-900 font-bold  ml-4">
                                {selectedConversation.fullname}
                            </span>{" "}
                        </span>
                    </div>
                    {/* Scrollable Messages Area */}
                    <div className="flex-1 overflow-y-auto min-h-0 px-4 py-2">
                        <Messages />
                    </div>
                    {/* Message Input */}
                    <div className="border-t border-gray-300">
                        <MessageInput />
                    </div>
                </>
            ) : (
                <NoChatSelected />
            )}
        </div>
    );
};

const NoChatSelected = () => {
    console.log("not chat is selected")
    return (
        <div className="flex items-center justify-center w-full h-full">
            <div className="px-4 text-center sm:text-lg md:text-xl text-gray-700 font-semibold flex flex-col gap-2">
                <p>Select a chat to start messaging</p>
                <TiMessages className="text-3xl md:text-6xl" />
            </div>
        </div>
    );
};

export default MessageContainer;
