import { useEffect, useState } from "react";
import "./otp-field.scss";

const OtpField = ({ onOtpComplete }) => {
  const [otp, setOtp] = useState(["", "", "", ""]);

  useEffect(() => {
    document.getElementById("otp-0")?.focus();
  }, []);

  const handleChange = (e, i) => {
    const { value } = e.target;
    if (!/^\d?$/.test(value)) return; // Разрешаем ввод только одной цифры

    const newOtp = [...otp];
    newOtp[i] = value;
    setOtp(newOtp);

    if (value && otp[i + 1] !== undefined) {
      document.getElementById(`otp-${i + 1}`).focus();
    }

    if (newOtp.every((digit) => digit !== "")) {
      onOtpComplete(newOtp.join(""));
    }
  };

  const handleKeyDown = (e, i) => {
    if (e.key === "Backspace" && !otp[i] && otp[i - 1] !== undefined) {
      document.getElementById(`otp-${i - 1}`).focus();
    }
  };

  const handlePaste = (e) => {
    try {
      e.preventDefault();
      const pasteData = e.clipboardData.getData("text").replace(/\D/g, ""); // Удаляем все нечисловые символы
      if (!pasteData) return;
      if (pastedData.length !== 4) return;

      const newOtp = [...otp];
      pasteData.split("").forEach((char, index) => {
        if (index < newOtp.length) {
          newOtp[index] = char;
        }
      });

      setOtp(newOtp);

      if (newOtp.every((digit) => digit !== "")) {
        onOtpComplete(newOtp.join(""));
      }

      setTimeout(() => document.getElementById("otp-3")?.focus(), 0);
    } catch (error) {
      console.log("Nothing to paste!");
    }
  };

  return (
    <div className="otp-field-div">
      {otp.map((digit, i) => (
        <input
          key={i}
          id={`otp-${i}`}
          className="otp-field"
          type="text"
          value={digit}
          onChange={(e) => handleChange(e, i)}
          onKeyDown={(e) => handleKeyDown(e, i)}
          onPaste={handlePaste}
          maxLength="1"
        />
      ))}
    </div>
  );
};

export default OtpField;
