import { Link } from "react-router-dom";
import "./button.scss";
import classNames from "classnames";

const Button = ({ className = "", caption, to, onClick = () => {} }) => {
  const btnClass = classNames({
    button: true,
    [`${className}`]: true,
  });

  return (
    <Link to={to} className={btnClass} onClick={onClick}>
      {caption}
    </Link>
  );
};
export default Button;
