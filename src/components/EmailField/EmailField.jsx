import { useState } from "react";
import TextField from "../TextField/TextField";
import "./email-field.scss";

const EmailField = () => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    let inputValue = e.target.value;

    // 1. Remove invalid characters
    inputValue = inputValue.replace(/[^a-zA-Z0-9._%+\-@]/g, "");

    // 2. Disallow multiple @ symbols: keep only the first
    const parts = inputValue.split("@");
    if (parts.length > 2) {
      // Reconstruct the string by keeping the first '@' and removing subsequent ones
      inputValue = parts[0] + "@" + parts.slice(1).join("").replace(/@/g, "");
    }

    // 3. Remove consecutive dots
    inputValue = inputValue.replace(/\.{2,}/g, ".");

    setValue(inputValue);
  };

  return <TextField label="Email" value={value} onChange={handleChange} />;
};

export default EmailField;
