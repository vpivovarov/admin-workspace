import React, { FC, useState } from "react";
import { createUseStyles } from "react-jss";
import clsx from "clsx";

import { AwTheme } from "../../theme";

import { CollapseButton } from "./CollapseButton";
import { menus } from "./menus";

const Sidebar: FC = () => {
  const styles = useStyles();
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={clsx(styles.sidebar, { isCollapsed })}>
      <nav className={styles.menu}>
        <ul className={styles.menuList}>
          {menus.map((menu) => (
            <li
              key={menu.title}
              className={clsx(styles.menuItem, { isCollapsed })}
            >
              <a href={menu.path ?? "#"} className={styles.menuItemLink}>
                <img src={menu.icon} alt={menu.icon} />
                {isCollapsed ? null : menu.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <CollapseButton isCollapsed={isCollapsed} onCollapse={toggleSidebar} />
    </div>
  );
};

export default Sidebar;

const useStyles = createUseStyles((theme: AwTheme) => ({
  sidebar: {
    height: "100vh",
    position: "fixed",
    left: 0,
    backgroundColor: theme.palette.white,
    transition: "width 0.3s ease-in-out",
    borderRight: `1px solid ${theme.palette.brightGrey.extraLight}`,

    "&.isCollapsed": {
      width: "auto",
    },
  },
  menu: {
    marginTop: 16,
  },
  menuList: {
    listStyleType: "none",
    padding: "0px 16px",
    margin: 0,
  },
  menuItem: {
    padding: 8,
    borderRadius: theme.shape.borderRadius,
    cursor: "pointer",
    width: 312,

    "&:hover": {
      backgroundColor: theme.palette.brightGrey.extraLight,
    },

    "&.isCollapsed": {
      width: "auto",
    },
  },
  menuItemLink: {
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
    color: theme.palette.brightGrey.color,
    gap: 16,
  },
}));
