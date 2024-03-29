import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";


const ICON_SIZE = "3x";
const ICON_COLOR = "black";
const ICON_STYLE = "pl-12 pr-12";


export function Socials() {
  return (
    <div>
      <h2 className="text-2xl p-5">Where to find me</h2>
      <span>
        <Instagram />
        <LinkedIn />
        <Github />
        <Email />
      </span>
    </div>
  );
}


function Instagram() {
  return (
    <a href="https://www.instagram.com/daoustwithaq/" className={ICON_STYLE}>
      <FontAwesomeIcon icon={faInstagram} size={ICON_SIZE} color={ICON_COLOR} />
    </a>
  );
}


function LinkedIn() {
  return (
    <a
      href="https://www.linkedin.com/in/andrew-daoust/"
      className={ICON_STYLE}
    >
      <FontAwesomeIcon icon={faLinkedin} size={ICON_SIZE} color={ICON_COLOR} />
    </a>
  );
}


function Github() {
  return (
    <a href="https://github.com/andrewdaoust" className={ICON_STYLE}>
      <FontAwesomeIcon icon={faGithub} size={ICON_SIZE} color={ICON_COLOR} />
    </a>
  );
}


function Email() {
  return (
    <a href="mailto: andrew@daoust.dev" className={ICON_STYLE}>
      <FontAwesomeIcon icon={faEnvelope} size={ICON_SIZE} color={ICON_COLOR} />
    </a>
  );
}