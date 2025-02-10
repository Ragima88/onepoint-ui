import "./primary-button.scss";
import Button from "../Button/Button";
import classNames from "classnames";

const PrimaryButton = ({ caption, className = "" }) => {
  const btnClass = classNames({
    [`primary-button`]: true,
    [`${className}`]: true,
  });
  return <Button caption={caption} className={btnClass} />;
};
export default PrimaryButton;
