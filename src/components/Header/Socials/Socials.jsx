import { Icon } from "./Icons/Icon";
import "../../../styles/root.scss";
import { AnimationOnScroll } from "react-animation-on-scroll";

const SocialsItems = [
  {
    icon: "youtube",
    link: "https://www.youtube.com/channel/UCCzp3DWpSc0s5wXYDghjM9A",
  },
  {
    icon: "twitter",
    link: "https://twitter.com/norimyxxxo",
  },
  {
    icon: "applemusic",
    link: "https://music.apple.com/pl/artist/oxxxymiron/301601116",
  },
  {
    icon: "tiktok",
    link: "https://www.tiktok.com/@oxxxymiron",
  },
  {
    icon: "instagram",
    link: "https://www.instagram.com/norimyxxxo",
  },
  {
    icon: "spotify",
    link: "https://open.spotify.com/artist/1gCOYbJNUa1LBVO5rlx0jB",
  },
];

export const Socials = ({ ...rest }) => (
  <ul className="socials">
    {SocialsItems.map(({ icon, link }, i) => (
      <AnimationOnScroll
        key={link}
        className="menu_item"
        animateIn="animate__fadeInDown"
        delay={i * 100}
        offset={0}
      >
        <li title={icon} className="socials-item" key={icon}>
          <a href={link} target="__blank">
            <Icon name={icon} {...rest} />
          </a>
        </li>
      </AnimationOnScroll>
    ))}
  </ul>
);
