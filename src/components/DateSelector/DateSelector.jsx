import { useEffect, useState } from "react";
import SelectField from "../SelectField/SelectField";
import "./date-selector.scss";

const DateSelector = ({
  labelText = "",
  from = 1950,
  to = new Date().getFullYear(),
  onChange = () => {},
}) => {
  const monthOptions = [
    { label: "Ay", value: "", disabled: true },
    { label: "Yanvar", value: "01" },
    { label: "Fevral", value: "02" },
    { label: "Mart", value: "03" },
    { label: "Aprel", value: "04" },
    { label: "May", value: "05" },
    { label: "İyun", value: "06" },
    { label: "İyul", value: "07" },
    { label: "Avqust", value: "08" },
    { label: "Sentyabr", value: "09" },
    { label: "Oktyabr", value: "10" },
    { label: "Noyabr", value: "11" },
    { label: "Dekabr", value: "12" },
  ];

  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");

  useEffect(() => {
    if (year && month && day) {
      onChange(year + "-" + month + "-" + day);
    } else {
      onChange(null);
    }
  }, [year, month, day]);

  const handleChange = (field, e) => {
    const newValue = e.target.value;
    if (field === "year") {
      setYear(newValue);
      setMonth("");
      setDay("");
    }
    if (field === "month") {
      setMonth(newValue);
      setDay("");
    }
    if (field === "day") {
      setDay(newValue);
    }
  };

  const getYears = () => {
    const result = [];
    for (let year = from; year <= to; year++) {
      result.push({ label: year.toString(), value: year });
    }
    result.sort((a, b) => b.value - a.value);
    return [{ label: "İl", value: "", disabled: true }, ...result];
  };

  const getMonth = () => {
    return monthOptions.map((option) => ({
      label: option.label,
      value: option.value,
      disabled: option.disabled || false,
    }));
  };

  const getDay = () => {
    if (!month || !year) return [{ label: "Gün", value: "", disabled: true }];
    const daysInMonth = new Date(year, month, 0).getDate();
    const days = Array.from({ length: daysInMonth }, (_, i) => ({
      label: (i + 1).toString(),
      value: (i + 1).toString().padStart(2, "0"),
    }));
    return [{ label: "Gün", value: "", disabled: true }, ...days];
  };

  return (
    <div className="date-selector">
      <label className="date-selector-label">{labelText}</label>
      <div className="date-selector-fields">
        <SelectField
          options={getYears()}
          value={year}
          onChange={(e) => handleChange("year", e)}
        />
        <SelectField
          options={getMonth()}
          value={month}
          onChange={(e) => handleChange("month", e)}
          disabled={!year}
        />
        <SelectField
          options={getDay()}
          value={day}
          onChange={(e) => handleChange("day", e)}
          disabled={!month}
        />
      </div>
    </div>
  );
};

export default DateSelector;
