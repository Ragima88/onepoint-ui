import "./textarea-field.scss";

const TextareaField = ({ label, value, onChange, placeholder }) => {
  return (
    <label className="textarea-field">
      <span>{label}</span>
      <textarea
        className="textarea"
        placeholder={placeholder}
        name=""
        value={value}
        onChange={onChange}
      ></textarea>
    </label>
  );
};
export default TextareaField;
