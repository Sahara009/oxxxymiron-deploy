import React from "react";
import { Socials } from "../Header/Socials/Socials";
import { Logo } from "../Header/Logo/Logo";
import { FooterForm } from "./FooterForm/FooterForm";
import "../../styles/root.scss";

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-wrapper">
          <FooterForm />

          <div className="footer-info">
            <Logo />
            <p>OXXXYMIRON, {year}</p>
          </div>

          <Socials width={24} height={24} />
        </div>
      </div>
    </footer>
  );
};
