import { useEffect, useState } from "react";
import Input from "../Input/Input";
import SuccessList from "../SuccessList/SuccessList";
import { messages } from "./data";
import closeEye from "./icons/close-eye.svg";
import eye from "./icons/eye.svg";
import "./password.scss";

const Password = ({
  label,
  value = "",
  onChange,
  onValidationChange,
  showError,
  errorMessage,
  disabled = false,
  note,
  language = "az",
  mode = "default",
  match,
}) => {
  const [inputValue, setInputValue] = useState(value);
  const [valid, setValid] = useState(false);
  const [open, setOpen] = useState(false);
  const [validationResult, setValidationResult] = useState([]);

  const handleInputChange = (e) => {
    const { value } = e.target;

    if (!/\s/.test(value)) {
      setInputValue(value);
      if (onChange) {
        onChange(value);
      }
    }
  };

  // Do not delete until the whole project QA
  // const rules = [
  //   {
  //     regex: /^[a-zA-Z0-9!@#$%^&*()\-_=+{}[\]:;'"<>.,?/|]+$/,
  //     message: messages?.[language]?.restrictChars,
  //     required: true,
  //     index: 0,
  //   },
  //   {
  //     regex: /[a-zA-Z]/,
  //     message: messages?.[language]?.latinAlphabet,
  //     required: true,
  //     index: 1,
  //   },
  //   {
  //     regex: /(?=.*[a-z])(?=.*[A-Z])/,
  //     message: messages?.[language]?.uppercaseLowercase,
  //     required: true,
  //     index: 2,
  //   },
  //   {
  //     regex: /(?=.*[0-9])/,
  //     message: messages?.[language]?.numbers,
  //     required: true,
  //     index: 3,
  //   },
  //   {
  //     regex: /.{8,}/,
  //     message: messages?.[language]?.minLength,
  //     required: true,
  //     index: 4,
  //   },
  //   {
  //     regex: /[!@#$%^&*()\-_=+{}[\]:;'"<>.,?/|]/,
  //     message: messages?.[language]?.specialSymbols,
  //     required: false,
  //     index: 5,
  //   },
  // ];

  const rules = [
    {
      regex: /^[a-zA-Z0-9!@#$%^&*()\-_=+{}[\]:;'"<>.,?/|]+$/,
      message: messages?.[language]?.restrictChars,
      required: true,
      index: 0,
    },
    {
      regex: /[a-zA-Z]/,
      message: messages?.[language]?.latinAlphabet,
      required: true,
      index: 1,
    },
    {
      regex: /(?=.*[a-z])(?=.*[A-Z])/,
      message: messages?.[language]?.uppercaseLowercase,
      required: true,
      index: 2,
    },
    {
      regex: /(?=.*[0-9])/,
      message: messages?.[language]?.numbers,
      required: true,
      index: 3,
    },
    {
      regex: /.{8,32}/,
      message: messages?.[language]?.minLength,
      required: true,
      index: 4,
    },
    {
      regex: /[!@#%^&()\[\]_+\-=#^${}|;':",./<>?~`\s]/,
      message: messages?.[language]?.specialSymbols,
      required: false,
      index: 5,
    },
  ];

  useEffect(() => {
    const result = [];
    let isValid = true;
    for (let i = 0; i < rules.length; i++) {
      const resultItem = {
        index: i,
        description: rules[i].message,
        success: false,
        required: rules[i].required,
      };
      if (rules[i].regex.test(inputValue)) {
        result.push({ ...resultItem, index: i, success: true });
      } else {
        result.push({ ...resultItem, index: i, success: false });
        if (rules[i].required) isValid = false;
      }
    }

    setValidationResult(result);
    setValid(isValid);
    if (onValidationChange) {
      onValidationChange(isValid);
    }
  }, [inputValue, language, onValidationChange]);

  useEffect(() => {
    if (mode === "match" && match !== undefined) {
      const isMatch = inputValue === match;
      setValid(isMatch);
      if (onValidationChange) {
        onValidationChange(isMatch);
      }
    }
  }, [inputValue, match, mode, validationResult, onValidationChange]);

  const eyeButton = (
    <button className={"eye"} onClick={() => setOpen(!open)} type="button">
      <img src={open ? eye : closeEye} alt="Toggle visibility" />
    </button>
  );

  const getErrorMessage = () => {
    if (mode === "match" && !valid && showError) {
      return errorMessage || messages?.[language].mismatch;
    }
    if (mode === "default" && !valid && showError) {
      return errorMessage || messages?.[language]?.invalidPassword;
    }
    return "";
  };

  // Map status to indicator
  const indicator = (validationResult) => {
    const countSuccess = validationResult.filter((item) => {
      return item.success === true;
    }).length;

    const countRequiredSuccess = validationResult.filter((item) => {
      return item.success === true && item.required;
    }).length;

    const color = countRequiredSuccess === 5 ? "green" : "red";

    const indicatorArray = rules.map((item) => {
      return (
        <span
          key={item.index}
          className={item.index <= countSuccess - 1 ? color : "gray"}
        ></span>
      );
    });
    return indicatorArray;
  };

  return (
    <>
      <Input
        type={open ? "text" : "password"}
        className={"password-input"}
        label={label}
        note={note}
        errorMessage={getErrorMessage()}
        disabled={disabled}
        value={inputValue}
        onChange={handleInputChange}
        right={eyeButton}
      />
      {mode === "matchArray" ? (
        <>
          <div className={"indicator"}>{indicator(validationResult)}</div>
          <SuccessList options={validationResult} />
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default Password;
