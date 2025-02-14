import "./image.scss";
import classNames from "classnames";
import placeholder from "./assets/placeholder.webp";

const Image = ({ className = "", src = placeholder, alt = "" }) => {
  const imgClass = classNames({
    [`image`]: true,
    [`${className}`]: true,
  });
  return (
    <div className={imgClass}>
      <img src={src} alt={alt} />
    </div>
  );
};
export default Image;
