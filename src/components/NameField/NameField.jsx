import { useState } from "react";
import TextField from "../TextField/TextField";

import "./name-field.scss";

const NameField = ({ label, placeholder, id, name, lang = "en" }) => {
  const [value, setValue] = useState("");
  let filteredValue;
  const handleChange = (e) => {
    if (lang === "en") {
      filteredValue = e.target.value.replace(/[^a-zA-Z\s]/g, "");
    }
    if (lang === "az") {
      filteredValue = e.target.value.replace(/[^A-Za-zƏÇĞIİÖŞÜəçğıöşü\s]/g, "");
    }
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
export default NameField;
