import "./radio-group.scss";

const RadioGroup = ({
  labelText = "",
  options,
  value = "",
  onChange = () => {},
}) => {
  return (
    <div className="radio-group">
      <span className="radio-group-label">{labelText}</span>
      {options.map((option) => {
        return (
          <label key={option.value}>
            <input
              type="radio"
              name="radioGroup"
              value={option.value}
              checked={value === option.value}
              onChange={(e) => onChange(e.target.value)}
            />
            <span className="custom-radio"></span>
            <span>{option.label}</span>
          </label>
        );
      })}
    </div>
  );
};
export default RadioGroup;
