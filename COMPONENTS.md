# Component Structure Documentation

## Overview

The portfolio website has been refactored into modular, reusable components following React best practices.

## Main Layout Components

### App.jsx

- Main application component
- Contains the overall layout with `portfolio-container`
- Renders `Sidebar` and `MainContent` components

### Sidebar.jsx

- Main sidebar container component
- Composed of three modular sub-components:
  - `SidebarHeader` - Name, title, and description
  - `SidebarNavigation` - Navigation links with active state tracking
  - `SidebarSocial` - Social media links

### MainContent.jsx

- Scrollable content area
- Contains sections for About, Experience, Projects, and Writing
- Each section has its own component file

## Sidebar Sub-Components

### SidebarHeader.jsx

- Displays user name, title, and description
- Isolated styling in `SidebarHeader.css`
- Easy to customize personal information

### SidebarNavigation.jsx

- Handles navigation between sections
- Includes scroll detection for active state
- Smooth scrolling functionality
- Styled navigation indicators
- Self-contained in `SidebarNavigation.css`

### SidebarSocial.jsx

- Social media links with SVG icons
- Configurable through `socialLinks` array
- Hover effects and accessibility features
- Isolated styling in `SidebarSocial.css`

## Content Components

### MainContent.jsx

- Container for all main content sections
- Contains inline sections for About, Experience, Projects, and Writing
- Self-contained with all content and styling
- Responsive design for different screen sizes

## CSS Architecture

Each component has its own CSS file for styling isolation:

- `Sidebar.css` - Main sidebar layout and responsive design
- `SidebarHeader.css` - Header-specific styling
- `SidebarNavigation.css` - Navigation styling with indicators
- `SidebarSocial.css` - Social links styling
- `MainContent.css` - Main content area styling

## Benefits of This Structure

1. **Modularity**: Each component has a single responsibility
2. **Reusability**: Components can be easily reused or modified
3. **Maintainability**: Easier to debug and update specific features
4. **Scalability**: Easy to add new sections or modify existing ones
5. **Clean Code**: Smaller, focused components are easier to understand

## Future Enhancements

- Add prop-based configuration for SidebarHeader
- Create dynamic navigation based on available sections
- Add animation components for enhanced UX
- Implement theme switching functionality
