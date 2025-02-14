import { useState } from "react";
import FinCodeField from "../../components/FinCodeField/FinCodeField";
import NameField from "../../components/NameField/NameField";
import SelectField from "../../components/SelectField/SelectField";
import "./home.scss";
import DateSelector from "../../components/DateSelector/DateSelector";
import IdNumberField from "../../components/IdNumberField/IdNumberField";
const options = [
  { label: "Select an option", value: "", disabled: true },
  { label: "Option 1", value: "option1" },
  { label: "Option 2", value: "option2" },
  { label: "Option 3", value: "option3" },
];

const Home = () => {
  const [date, setDate] = useState(null);

  return (
    <>
      {/*  <NameField label={"Name"} placeholder={"Enter"} lang="az" />
      <FinCodeField label={"Fin"} placeholder={"Enter"} />
      <SelectField
        options={options}
        value={selectedValue}
        onChange={(e) => setSelectedValue(e.target.value)}
      />*/}
      <DateSelector
        labelText={"Doğum günü:"}
        options={options}
        value={date}
        onChange={setDate}
      />
      <IdNumberField />
    </>
  );
};
export default Home;
