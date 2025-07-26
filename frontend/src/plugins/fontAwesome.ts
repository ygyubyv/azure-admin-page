import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import {
  faRightToBracket,
  faLightbulb,
  faUserTie,
  faXmark,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

import { faGithub } from "@fortawesome/free-brands-svg-icons";

library.add(
  faRightToBracket,
  faLightbulb,
  faGithub,
  faUserTie,
  faXmark,
  faBars
);

export { FontAwesomeIcon };
