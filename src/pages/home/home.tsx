import Sidebar from "../../components/sidebar/sidebar";
import MessageContainer from "../../components/messages/messageContainer";
import useConversation from "../../zustand/useConversation";

const Home = () => {
    const { selectedConversation } = useConversation();

    return (
        <div className="w-full h-full rounded-lg overflow-hidden">
            {/* Mobile view */}
            <div className="md:hidden h-full w-full">
                {selectedConversation ? (
                    <MessageContainer mobileView={true} />
                ) : (
                    <Sidebar mobileView={true} />
                )}
            </div>

            {/* Desktop view */}
            <div className="hidden md:flex h-full w-full">
                <Sidebar mobileView={false} />
                <MessageContainer mobileView={false} />
            </div>
        </div>
    );
};

export default Home;
