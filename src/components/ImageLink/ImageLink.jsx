import { Link } from "react-router-dom";
import "./image-link.scss";
import classNames from "classnames";
import Image from "../Image/Image";

const ImageLink = ({ className = "", to = "", src, alt = "" }) => {
  const ImgLinkClass = classNames({
    [`img-link`]: true,
    [`${className}`]: true,
  });
  return (
    <Link className={ImgLinkClass} to={to}>
      <Image src={src} alt={alt} />
    </Link>
  );
};
export default ImageLink;
