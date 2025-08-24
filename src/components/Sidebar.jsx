import "./Sidebar.css";
import SidebarHeader from "./SidebarHeader";
import SidebarNavigation from "./SidebarNavigation";
import SidebarSocial from "./SidebarSocial";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-content">
        <SidebarHeader
          name="Abdulgafar Ridwan"
          title="Full-stack Developer"
          description="I build responsive, user-friendly web applications and digital experiences with React, JavaScript, and modern web technologies."
        />
        <SidebarNavigation />
        <SidebarSocial />
      </div>
    </div>
  );
}

export default Sidebar;
