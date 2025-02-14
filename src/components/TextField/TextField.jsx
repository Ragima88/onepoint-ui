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
}) => {
  const textClass = classNames({
    ["text-field"]: true,
    [`${className}`]: true,
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
        />
      </label>
    </div>
  );
};
export default TextField;
