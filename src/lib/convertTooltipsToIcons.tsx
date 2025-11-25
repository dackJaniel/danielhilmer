import {
  faHtml5,
  faCss3,
  faSass,
  faJs,
  faNodeJs,
  faReact,
  faPython,
  faStripe,
  faFigma,
  faWordpressSimple,
  faPhp,
} from "@fortawesome/free-brands-svg-icons";
import {
  faLock,
  faPhone,
  faBrain,
  faUpRightFromSquare,
  faDatabase,
  faInfoCircle,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";

// Tooltip zu Icon Mapping
const tooltipToIconMap: { [key: string]: any } = {
  HTML5: faHtml5,
  TailwindCSS: faCss3,
  CSS3: faCss3,
  SASS: faSass,
  JavaScript: faJs,
  NodeJS: faNodeJs,
  NextJS: faReact,
  React: faReact,
  Python: faPython,
  Zahlungen: faStripe,
  Stripe: faStripe,
  Figma: faFigma,
  Login: faLock,
  Auth: faLock,
  PWA: faPhone,
  AI: faBrain,
  "External Link": faUpRightFromSquare,
  Database: faDatabase,
  Info: faInfoCircle,
  WordPress: faWordpressSimple,
  WooCommerce: faCartShopping,
  PHP: faPhp,
};
// Hilfsfunktion: Tooltips zu Icons konvertieren
export function convertTooltipsToIcons(tooltipString: string) {
  if (!tooltipString) return [];

  const tooltips = tooltipString.split(",").map((tooltip) => tooltip.trim());
  const icons = tooltips
    .map(
      (tooltip) => tooltipToIconMap[tooltip as keyof typeof tooltipToIconMap],
    )
    .filter(Boolean);

  return icons;
}
