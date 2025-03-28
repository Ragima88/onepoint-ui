import { useState } from "react";
import SelectField from "../SelectField/SelectField";

import "./id-number-field.scss";
import TextField from "../TextField/TextField";

const options = [
  { label: "AZE", value: "AZE" },
  { label: "AA", value: "AA" },
];

const IdNumberField = ({
  label = "",
  type,
  number,
  setType = () => {},
  setNumber = () => {},
  disabled = false,
  error,
  setError,
}) => {
  const typeChange = (e) => {
    setError(false);
    setType(e.target.value);
    setNumber("");
  };

  const checkNumberLength = () => {
    if (
      (number.length < 8 && type === "AZE") ||
      (number.length < 7 && type === "AA")
    ) {
      setError(true);
    } else {
      setError(false);
    }
  };

  const numberChange = (e) => {
    let inputValue = e.target.value.replace(/\D/g, "");
    const maxLength = type === "AZE" ? 8 : 7;
    inputValue = inputValue.slice(0, maxLength);
    setNumber(inputValue);
    if (
      (inputValue.length === 8 && type === "AZE") ||
      (inputValue.length === 7 && type === "AA")
    ) {
      setError(false);
    }
  };

  const handleBlur = () => {
    checkNumberLength();
  };

  return (
    <label className="id-number-field-label">
      <span>{label}</span>
      <div className="id-number-field">
        <SelectField
          className={"id-number-field-serial"}
          onChange={typeChange}
          options={options}
          value={type}
          disabled={disabled}
        />
        <TextField
          className={"id-number-field-number"}
          placeholder={"Seriya nömrəsini daxil edin."}
          value={number}
          onChange={numberChange}
          onBlur={handleBlur}
          disabled={disabled}
        />
      </div>
      {error && <p className="error-note">Error</p>}
    </label>
  );
};
export default IdNumberField;
