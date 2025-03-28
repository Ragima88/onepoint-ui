import defaultSuccessIcon from "./icons/check-green.svg";
import defaultFailureIcon from "./icons/check.svg";
import "./success-list.scss";

const SuccessList = ({
  options,
  successIcon = defaultSuccessIcon,
  failureIcon = defaultFailureIcon,
}) => {
  return (
    <ul className={"success-list"}>
      {options.map((option) => (
        <li key={option.index} className={"success-list__item"}>
          {option.success ? (
            <img src={successIcon} alt={"success"} />
          ) : (
            <img src={failureIcon} alt={"failure"} />
          )}
          <span>{option.description}</span>
        </li>
      ))}
    </ul>
  );
};

export default SuccessList;
