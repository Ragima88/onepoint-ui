import "./primary-button.scss";
import Button from "../Button/Button";
import classNames from "classnames";

const PrimaryButton = ({
  disabled = false,
  loading = false,
  caption,
  className = "",
  to,
  onClick = () => {},
}) => {
  const btnClass = classNames({
    [`primary-button`]: true,
    [`${className}`]: true,
  });
  return (
    <Button
      disabled={disabled}
      loading={loading}
      to={to}
      caption={caption}
      className={btnClass}
      onClick={onClick}
    />
  );
};
export default PrimaryButton;
