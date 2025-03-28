import InputMask from "react-input-mask";
import "./input.scss";

const Input = ({
  label = "",
  note = "",
  value,
  onChange,
  errorMessage = "",
  disabled = false,
  readOnly = false,
  type = "text",
  onKeyDown,
  maxLength,
  className,
  reference,
  left,
  right,
  prefix,
  onPaste,
  mask,
  placeholder = "",
  ...props
}) => {
  const inputStyle = errorMessage ? { borderColor: "#f04438" } : {};
  return (
    <div
      className={`${"input"} ${className ? className : ""} ${
        disabled ? "disabled" : ""
      }`}
    >
      <label className={"label" + " text-label"}>{label}</label>
      <div className={"inputWrapper"}>
        {mask ? (
          <InputMask
            mask={mask}
            value={value}
            onChange={onChange}
            className={`${"inputElement"} ${disabled ? "disabled" : ""} ${
              left ? "leftGap" : ""
            } ${right ? "rightGap" : ""} ${className}`}
            disabled={disabled}
            readOnly={readOnly}
            onKeyDown={onKeyDown}
            maxLength={maxLength}
            style={inputStyle}
            ref={reference}
            onPaste={onPaste}
            placeholder={placeholder}
            formatChars={{ 9: "[0-9]", X: "[0-9]" }}
            maskChar="X"
            {...props}
          />
        ) : (
          <input
            type={type}
            value={value}
            onChange={onChange}
            style={inputStyle}
            className={`${"inputElement"} ${disabled ? "disabled" : ""} ${
              left ? "leftGap" : ""
            } ${right ? "rightGap" : ""} ${prefix ? "leftGap" : ""}`}
            disabled={disabled}
            readOnly={readOnly}
            onKeyDown={onKeyDown}
            maxLength={maxLength}
            ref={reference}
            onPaste={onPaste}
            placeholder={placeholder}
            data-gramm="false"
            data-gramm_editor="false"
            data-enable-grammarly="false"
            {...props}
          />
        )}
        {prefix && <div className={"left"}>{prefix}</div>}
        {left && (
          <div className={"left"}>
            <img src={left} alt="icon" />
          </div>
        )}
        {right && (
          <div className={"right"}>
            {typeof right === "string" ? <img src={right} alt="icon" /> : right}
          </div>
        )}
      </div>
      {note && <div className={"note" + " text-note"}>{note}</div>}
      {errorMessage && (
        <div className={"error" + " text-error"}>{errorMessage}</div>
      )}
    </div>
  );
};

export default Input;
