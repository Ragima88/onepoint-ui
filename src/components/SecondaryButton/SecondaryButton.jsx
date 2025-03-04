import "./secondary-button.scss";
import classNames from "classnames";

const SecondaryButton = ({ className = "", caption }) => {
  const btnClass = classNames({
    [`secondary-button`]: true,
    [`${className}`]: true,
  });

  return <button className={btnClass}>{caption}</button>;
};
export default SecondaryButton;
