import { useState } from "react";
import SelectField from "../SelectField/SelectField";

import "./id-number-field.scss";
import TextField from "../TextField/TextField";

const options = [
  { label: "AZE", value: "AZE" },
  { label: "AA", value: "AA" },
];

const IdNumber = ({}) => {
  const [type, setType] = useState("AZE");
  const [number, setNumber] = useState("");

  const typeChange = (e) => {
    setType(e.target.value);
    setNumber("");
  };

  const numberChange = (e) => {
    let inputValue = e.target.value.replace(/\D/g, "");
    const maxLength = type === "AZE" ? 8 : 7;
    inputValue = inputValue.slice(0, maxLength);
    setNumber(inputValue);
  };

  return (
    <div className="id-number-field">
      <SelectField
        className={"id-number-field-serial"}
        onChange={typeChange}
        options={options}
        value={type}
      />
      <TextField
        className={"id-number-field-number"}
        placeholder={"Seriya nömrəsini daxil edin."}
        value={number}
        onChange={numberChange}
      />
    </div>
  );
};
export default IdNumber;
