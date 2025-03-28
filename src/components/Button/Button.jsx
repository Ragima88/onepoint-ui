import { Link } from "react-router-dom";
import "./button.scss";
import classNames from "classnames";
import MemoizedLoader from "../MemoizedLoader/MemoizedLoader";

const Button = ({
  disabled = false,
  className = "",
  caption,
  to,
  onClick = () => {},
  loading = false,
}) => {
  const btnClass = classNames({
    button: true,
    [`${className}`]: true,
  });

  return (
    <Link to={to} className={btnClass} onClick={onClick} disabled={disabled}>
      {loading ? <MemoizedLoader variant="blink" size={0.8} /> : caption}
    </Link>
  );
};
export default Button;
