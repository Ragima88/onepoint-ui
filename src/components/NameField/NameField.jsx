import { useState } from "react";
import TextField from "../TextField/TextField";

import "./name-field.scss";

const NameField = ({
  label,
  value,
  onChange = () => {},
  placeholder,
  id,
  name,
  lang = "en",
  error,
  setError,
}) => {
  const handleChange = (e) => {
    let filteredValue = e.target.value;
    if (lang === "en") {
      filteredValue = filteredValue.replace(/[^a-zA-Z\s]/g, "");
    } else if (lang === "az") {
      filteredValue = filteredValue.replace(/[^A-Za-zƏÇĞIİÖŞÜəçğıöşü\s]/g, "");
    }
    onChange(filteredValue);
    if (filteredValue.length >= 3) setError(false);
  };

  const checkNameLength = () => {
    if (value.length < 3) {
      setError(true);
    } else {
      setError(false);
    }
  };

  const handleBlur = () => {
    checkNameLength();
  };
  return (
    <>
      <TextField
        label={label}
        placeholder={placeholder}
        id={id}
        name={name}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {error && <p className="error-note">Error</p>}
    </>
  );
};

export default NameField;
