import { useState } from "react";
import TextField from "../TextField/TextField";
import "./fin-code-field.scss";
const FinCodeField = ({ label, placeholder, id, name }) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    const filteredValue = e.target.value
      .replace(/[^a-zA-Z0-9]/g, "")
      .slice(0, 7);
    setValue(filteredValue);
  };
  return (
    <TextField
      label={label}
      placeholder={placeholder}
      id={id}
      name={name}
      value={value}
      onChange={handleChange}
    />
  );
};
export default FinCodeField;
