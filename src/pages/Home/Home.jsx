import { useState } from "react";
import FinCodeField from "../../components/FinCodeField/FinCodeField";
import NameField from "../../components/NameField/NameField";
import SelectField from "../../components/SelectField/SelectField";
import "./home.scss";

import RadioGroup from "../../components/RadioGroup/RadioGroup";
import TextareaField from "../../components/TextAreaField/TextAreaField";
import EmailField from "../../components/EmailField/EmailField";
import PhoneField from "../../components/PhoneField/PhoneField";
import OtpField from "../../components/OtpField/OtpField";
import SearchList from "../../components/SearchList/SearchList";

const options = [
  { label: "Select an option", value: "", disabled: true },
  { label: "Option 1", value: "option1" },
  { label: "Option 2", value: "option2" },
  { label: "Option 3", value: "option3" },
];
const radioGroup = [
  { label: "Instagram", value: "instagram" },
  { label: "Facebook", value: "facebook" },
  { label: "Youtube", value: "youtube" },
];

const Home = () => {
  const [textarea, setTextarea] = useState("");
  const areaChange = (e) => {
    setTextarea(e.target.value);
  };
  const handleOtpComplete = (otpValue) => {
    console.log("Введенный OTP:", otpValue);
  };
  return (
    <>
      {/*  <NameField label={"Name"} placeholder={"Enter"} lang="az" />
      <FinCodeField label={"Fin"} placeholder={"Enter"} />
      <SelectField
        options={options}
        value={selectedValue}
        onChange={(e) => setSelectedValue(e.target.value)}
      />*/}

      <TextareaField
        label={""}
        value={textarea}
        onChange={areaChange}
        placeholder={""}
      />
      <EmailField />
      <PhoneField />
      <OtpField onOtpComplete={handleOtpComplete} />
      <SearchList />
    </>
  );
};
export default Home;
