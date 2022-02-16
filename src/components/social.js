import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

const ICON_SIZE = "3x";
const ICON_COLOR = "black";


export function Socials() {
  return (
    <div>
      <h2>Where to find me</h2>
      <span> {/* style="color: black;" */}
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
    <a href="https://www.instagram.com/daoustwithaq/"
      className=""
    >
      <FontAwesomeIcon icon={faInstagram} size={ICON_SIZE} color={ICON_COLOR} />
    </a>
  );
}


function LinkedIn() {
  return (
    <a href="https://www.linkedin.com/in/andrew-daoust/">
      <FontAwesomeIcon icon={faLinkedin} size={ICON_SIZE} color={ICON_COLOR} />
    </a>
  );
}


function Github() {
  return (
    <a href="https://github.com/andrewdaoust">
      <FontAwesomeIcon icon={faGithub} size={ICON_SIZE} color={ICON_COLOR} />
    </a>
  );
}


function Email() {
  return (
    <a href="mailto: andrew@daoust.dev">
      <FontAwesomeIcon icon={faEnvelope} size={ICON_SIZE} color={ICON_COLOR} />
    </a>
  );
}