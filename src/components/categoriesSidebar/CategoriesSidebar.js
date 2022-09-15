import React from 'react';
import { NavLink } from 'react-router-dom';
import { sidebarData } from '../../utils/cosnts';
import './Sidebar.css';
const CategoriesSidebar = () => (
  <aside className='sidebar-categories'>
    {sidebarData.map(({ title, path }, index) => {
      return (
        <NavLink
          to={path}
          className={navData =>
            navData.isActive
              ? 'sidebar__link sidebar__link-active'
              : 'sidebar__link'
          }
          key={index}>
          {title}
        </NavLink>
      );
    })}
  </aside>
);

export default CategoriesSidebar;
