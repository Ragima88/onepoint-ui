import TextField from "../TextField/TextField";
import "./fin-code-field.scss";
const FinCodeField = ({
  label,
  placeholder,
  id,
  name,
  fin,
  setFin = () => {},
  disabled = false,
  error,
  setError = () => {},
}) => {
  const handleChange = (e) => {
    const filteredValue = e.target.value
      .replace(/[^a-zA-Z0-9]/g, "")
      .slice(0, 7);
    setFin(filteredValue);
    setError(false);
  };
  const checkNumberLength = () => {
    if (fin.length < 7) {
      setError(true);
    } else {
      setError(false);
    }
  };

  const handleBlur = () => {
    checkNumberLength();
  };
  return (
    <>
      <TextField
        label={label}
        placeholder={placeholder}
        id={id}
        name={name}
        value={fin}
        onChange={handleChange}
        disabled={disabled}
        onBlur={handleBlur}
      />
      {error && <p className="error-note">FİN kodu 7 simvol olmalıdır</p>}
    </>
  );
};
export default FinCodeField;
