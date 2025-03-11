import { useState } from "react";
import TextField from "../TextField/TextField";
import "./phone-field.scss";

const PhoneField = ({ label, disabled = false }) => {
  const [rawDigits, setRawDigits] = useState("");

  // Convert any string to digits-only
  const parseDigits = (input) => input.replace(/\D/g, "");

  // Format digits (up to 9) as (XX) XXX XX XX
  const formatDigits = (digits) => {
    const arr = digits.split("");
    let formatted = "";

    // (XX)
    if (arr.length > 0) {
      formatted += "(" + arr.slice(0, 2).join("");
      if (arr.length >= 2) {
        formatted += ") ";
      }
    }

    // XXX
    if (arr.length >= 3) {
      formatted += arr.slice(2, 5).join("") + " ";
    }

    // XX
    if (arr.length >= 5) {
      formatted += arr.slice(5, 7).join("") + " ";
    }

    // XX
    if (arr.length >= 7) {
      formatted += arr.slice(7, 9).join("");
    }

    return formatted.trim();
  };

  const onChange = (e) => {
    const oldValue = formatDigits(rawDigits);
    const newValue = e.target.value;

    // If new string is shorter, user is backspacing/removing
    if (newValue.length < oldValue.length) {
      setRawDigits((prev) => prev.slice(0, -1));
    } else {
      // User is adding characters
      const digits = parseDigits(newValue).slice(0, 9);
      setRawDigits(digits);
    }
  };

  return (
    <label className="phone-field-label">
      <span>{label}</span>
      <div className={`phone-field ${disabled ? "disabled" : ""}`}>
        <div className="phone-field-left">+994</div>
        <TextField
          placeholder="(——) ——— —— ——"
          value={formatDigits(rawDigits)}
          onChange={onChange}
          disabled={disabled}
        />
      </div>
    </label>
  );
};

export default PhoneField;
