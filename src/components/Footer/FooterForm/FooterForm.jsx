import React, { useState } from "react";
import "../../../styles/root.scss";
import { Icon } from "../../Header/Socials/Icons/Icon";

export const FooterForm = () => {
  const [state, setState] = useState("");

  const handleChange = ({ target: { value } }) => {
    setState(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setState("");
  };

  return (
    <form className="footer-form" onSubmit={handleSubmit}>
      <p>онлифанс оксимирона</p>

      <div className="footer-form__email">
        <input
          onChange={handleChange}
          type="email"
          name="email"
          value={state}
          placeholder="Email"
        />
      </div>
      <button className="footer-form__button" type="submit">
        <span>Подписаться</span>
        <Icon name="arrow-right" />
      </button>
    </form>
  );
};
