import React from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import Backdrop from "../../UI/Backdrop/Backdrop";
import Aux from "../../../hoc/Aux";
import "./SideDrawer.css";

const sideDrawer = props => {
  let attachedClass = ["sidedrawer", "close"];
  if (props.open) {
    attachedClass = ["sidedrawer", "open"];
  }

  return (
    <Aux>
      <Backdrop clicked={props.closed} show={props.open} />
      <div className={attachedClass.join(' ')}>
        <div className="logoside">
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Aux>
  );
};

export default sideDrawer;
