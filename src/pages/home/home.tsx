import Sidebar from "../../components/sidebar/sidebar";
import MessageContainer from "../../components/messages/messageContainer";
import useConversation from "../../zustand/useConversation";

const Home = () => {
  const { selectedConversation } = useConversation();

  return (
    <div className="w-full h-full rounded-lg overflow-hidden">
      {/* Mobile view: show Sidebar if no conversation is selected, otherwise show chat view */}
      <div className="md:hidden h-full w-full">
        {selectedConversation ? (
          <MessageContainer mobileView={true} />
        ) : (
          <Sidebar mobileView={true} />
        )}
      </div>

      {/* Desktop view: always show Sidebar, and show MessageContainer only when a conversation is selected */}
      <div className="hidden md:flex h-full w-full">
        <Sidebar />
        {selectedConversation && <MessageContainer />}
      </div>
    </div>
  );
};

export default Home;
