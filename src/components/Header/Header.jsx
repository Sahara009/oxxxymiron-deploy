import React from "react";
import { Logo } from "./Logo/Logo";
import { Menu } from "./Menu/Menu";
import "../../styles/root.scss";
import "animate.css/animate.min.css";
import { Socials } from "./Socials/Socials";
import "../../styles/root.scss";

export const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <header>
          <Logo />
          <Menu />
          <Socials width={16} height={16} />
        </header>
      </div>
    </div>
  );
};
