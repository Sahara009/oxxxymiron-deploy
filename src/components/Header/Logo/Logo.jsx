import React from "react";
import { Link } from "react-router-dom";

import logo from "../../../assets/images/logo.webp";

export const Logo = () => (
  <div className="logo">
    <Link to={"/"}>
      <img src={logo} alt="logo" />
    </Link>
  </div>
);
