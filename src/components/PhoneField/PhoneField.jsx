import { useEffect, useState } from "react";
import TextField from "../TextField/TextField";
import "./phone-field.scss";

// PhoneField component takes in label, value, onChange, and disabled props
const PhoneField = ({
  label,
  value = "",
  setValue = () => {},
  onChange: parentOnChange,
  disabled = false,
  error,
  setError,
}) => {
  useEffect(() => {
    setValue(value);
  }, [value]);

  const checkPhoneLength = () => {
    if (value.length < 9) {
      setError(true);
    } else {
      setError(false);
    }
  };

  const handleBlur = () => {
    checkPhoneLength();
  };

  // Utility to remove all non-digit characters
  const parseDigits = (input) => input.replace(/\D/g, "");

  // Format a string of digits as (XX) XXX XX XX
  const formatDigits = (digits) => {
    const arr = digits.split("");
    let formatted = "";

    // Add area code: (XX)
    if (arr.length > 0) {
      formatted += "(" + arr.slice(0, 2).join("");
      if (arr.length >= 2) {
        formatted += ") ";
      }
    }

    // Add next 3 digits: XXX
    if (arr.length >= 3) {
      formatted += arr.slice(2, 5).join("") + " ";
    }

    // Add next 2 digits: XX
    if (arr.length >= 5) {
      formatted += arr.slice(5, 7).join("") + " ";
    }

    // Add last 2 digits: XX
    if (arr.length >= 7) {
      formatted += arr.slice(7, 9).join("");
    }

    return formatted.trim();
  };

  // Handle changes to the input field
  const handleChange = (e) => {
    const oldValue = formatDigits(value);
    const newValue = e.target.value;

    // If input is getting shorter, assume user is deleting
    if (newValue.length < oldValue.length) {
      const updated = value.slice(0, -1);
      setValue(updated);
      parentOnChange?.(updated); // Notify parent component
    } else {
      // If adding characters, parse and limit to 9 digits
      const digits = parseDigits(newValue).slice(0, 9);
      setValue(digits);
      parentOnChange?.(digits); // Notify parent component
    }
    if (parseDigits(newValue).length === 9) {
      setError(false);
    }
  };

  return (
    <>
      <label className="phone-field-label">
        {/* Label above the input */}
        <span>{label}</span>

        {/* Main container for the phone field */}
        <div className={`phone-field ${disabled ? "disabled" : ""}`}>
          {/* Prefix for the country code (static) */}
          <div className="phone-field-left">+994</div>

          {/* Text input field */}
          <TextField
            placeholder="(——) ——— —— ——" // Placeholder formatting
            value={formatDigits(value)} // Show formatted value
            onChange={handleChange} // Handle input changes
            disabled={disabled} // Disable field if needed
            onBlur={handleBlur}
          />
        </div>
      </label>
      {error && <p className="error-note">Error</p>}
    </>
  );
};

export default PhoneField;
