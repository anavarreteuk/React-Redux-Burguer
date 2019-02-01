import React from "react";
import "./Toolbar.css";
import Logo from "../Logo/Logo";
import NavigationItems from "./NavigationItems/NavigationItems";
import DrawerToggler from '../Navigation/SideDrawer/DrawerToggler/DrawerToggler'

const toolbar = props => (
  <header className="toolbar">
    <DrawerToggler clicked={props.drawerToggleClicked} />
    <div className="logotool">
      <Logo />
    </div>
    <nav className="desktoponly">
      <NavigationItems />
    </nav>
  </header>
);

export default toolbar;
