import TextField from "../TextField/TextField";
import "./email-field.scss";

const EmailField = ({ label, disabled, value, setValue, error, setError }) => {
  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

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
    if (validateEmail(inputValue)) {
      setError(false);
    }
  };

  const handleBlur = () => {
    if (validateEmail(value)) {
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <>
      <TextField
        label={label}
        value={value}
        onChange={handleChange}
        disabled={disabled}
        onBlur={handleBlur}
      />
      {error && <div className="error-note">{"error"}</div>}
    </>
  );
};

export default EmailField;
