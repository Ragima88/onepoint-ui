import "./text-field.scss";
import classNames from "classnames";
const TextField = ({
  className = "",
  label,
  placeholder,
  id,
  name,
  value,
  onChange,
  disabled = false,
}) => {
  const textClass = classNames({
    ["text-field"]: true,
    [`${className}`]: true,
    ["disabled"]: disabled,
  });

  return (
    <div className={textClass}>
      <label>
        <span>{label}</span>
        <input
          id={id}
          type="text"
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disabled}
        />
      </label>
    </div>
  );
};
export default TextField;
