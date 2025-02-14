import "./select-field.scss";
import Image from "../Image/Image";
import arrow from "./assets/arrow.svg";
import classNames from "classnames";

const SelectField = ({
  options,
  value,
  onChange,
  customArrow,
  labelText = "",
  disabled = false,
  className = "",
}) => {
  const primaryColor = getComputedStyle(
    document.documentElement
  ).getPropertyValue("--primary");
  const placeholderColor = getComputedStyle(
    document.documentElement
  ).getPropertyValue("--input-placeholder");

  const selectClass = classNames({
    ["select-field"]: true,
    [`${className}`]: true,
  });

  return (
    <div className={selectClass}>
      <label>
        <span>{labelText}</span>

        <select
          className="select-field-input"
          value={value}
          onChange={onChange}
          style={{
            color: value ? primaryColor : placeholderColor,
          }}
          disabled={disabled}
        >
          {options.map((option) => (
            <option
              key={option.value}
              value={option.value}
              disabled={option.disabled}
            >
              {option.label}
            </option>
          ))}
        </select>
        <div className="select-field-arrow">
          <Image src={customArrow ? customArrow : arrow} />
        </div>
      </label>
    </div>
  );
};

export default SelectField;
