import "./image.scss";
import classNames from "classnames";
import placeholder from "./assets/placeholder.webp";

const Image = ({
  className = "",
  src = placeholder,
  onClick = () => {},
  alt = "",
}) => {
  const imgClass = classNames({
    [`image`]: true,
    [`${className}`]: true,
  });
  return (
    <div className={imgClass} onClick={onClick}>
      <img src={src} alt={alt} />
    </div>
  );
};
export default Image;
