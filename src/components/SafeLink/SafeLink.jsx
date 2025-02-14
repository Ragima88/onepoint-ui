import { Link } from "react-router-dom";
import "./safe-link.scss";
import classNames from "classnames";

const SafeLink = ({ className = "", href = "#", children }) => {
  const safeClass = classNames({
    [`safe-link`]: true,
    [`${className}`]: true,
  });
  return (
    <a
      className={safeClass}
      href={href}
      ref={"noopener noreferrer nofollow"}
      target={"_blank"}
    >
      {children}
    </a>
  );
};
export default SafeLink;
