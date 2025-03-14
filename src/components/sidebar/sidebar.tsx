import Conversations from "./conversations";
import LogoutButton from "./logoutButton";
import SearchInput from "./searchInput";

interface SidebarProps {
  mobileView?: boolean;
}

const Sidebar = ({ mobileView }: SidebarProps) => {
  return (
    <div
      className={`border-r border-slate-500 p-4 flex flex-col h-full min-h-0 overflow-y-auto w-full ${
        mobileView ? "" : "md:w-1/3"
      }`}
    >
      <SearchInput />
      <div className="divider px-3 my-2"></div>
      <Conversations />
      <LogoutButton />
    </div>
  );
};

export default Sidebar;
