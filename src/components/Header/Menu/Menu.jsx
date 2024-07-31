import { AnimationOnScroll } from "react-animation-on-scroll";
import { Link } from "react-router-dom";
import "../../../styles/root.scss";

export const MenuList = [
  {
    name: "Концерты",
    link: "tour",
  },
  {
    name: "Творчество",
    link: "tracks",
  },
  {
    name: "Новости",
    link: "news",
  },
  {
    name: "OXXXYSHOP",
    link: "shop",
  },
];

export const Menu = () => {
  return (
    <nav className="menu">
      {MenuList.map(({ name, link }, i) => (
        <AnimationOnScroll
          key={link}
          className="menu-item"
          animateIn="animate__fadeInDown"
          delay={i * 100}
          offset={0}
        >
          <Link className="link" to={`/${link}`}>
            {name}
          </Link>
        </AnimationOnScroll>
      ))}
    </nav>
  );
};
