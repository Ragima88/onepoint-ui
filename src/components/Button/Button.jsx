import { Link } from "react-router-dom";
import "./button.scss";
import classNames from "classnames";

const Button = ({ className = "", caption, to }) => {
  const btnClass = classNames({
    button: true,
    [`${className}`]: true,
  });

  return (
    <Link to={to} className={btnClass}>
      {caption}
    </Link>
  );
};
export default Button;
