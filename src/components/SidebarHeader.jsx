import "./SidebarHeader.css";

function SidebarHeader({
  name = "Your Name",
  title = "Your Title",
  description = "Your description goes here.",
}) {
  return (
    <div className="sidebar-header">
      <h1 className="name">{name}</h1>
      <h2 className="title">{title}</h2>
      <p className="description">{description}</p>
    </div>
  );
}

export default SidebarHeader;
