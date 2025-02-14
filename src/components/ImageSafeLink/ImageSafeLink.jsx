import "./image-safe-link.scss";
import classNames from "classnames";
import SafeLink from "../SafeLink/SafeLink";

const ImageLink = ({ className = "", href = "#", src, alt = "" }) => {
  const linkClass = classNames({
    [`img-safe-link`]: true,
    [`${className}`]: true,
  });
  return (
    <SafeLink className={linkClass} href={href}>
      <img src={src} alt={alt} />
    </SafeLink>
  );
};
export default ImageLink;
