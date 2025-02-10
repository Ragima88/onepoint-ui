import "./button.scss";
import classNames from "classnames";

const Button = ({ className = "", caption }) => {
  const btnClass = classNames({
    button: true,
    [`${className}`]: true,
  });

  return <button className={btnClass}>{caption}</button>;
};
export default Button;
