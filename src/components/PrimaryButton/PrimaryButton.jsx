import "./primary-button.scss";
import Button from "../Button/Button";
import classNames from "classnames";

const PrimaryButton = ({ caption, className = "", to, onClick = () => {} }) => {
  const btnClass = classNames({
    [`primary-button`]: true,
    [`${className}`]: true,
  });
  return (
    <Button to={to} caption={caption} className={btnClass} onClick={onClick} />
  );
};
export default PrimaryButton;
