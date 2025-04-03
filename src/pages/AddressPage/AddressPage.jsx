import "./address-page.scss";
import TitleBlock from "../../components/TitleBlock/TitleBlock";
import SearchList from "../../components/SearchList/SearchList";
import TextField from "../../components/TextField/TextField";
import RadioGroup from "../../components/RadioGroup/RadioGroup";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import { useState } from "react";
import TextareaField from "../../components/TextAreaField/TextAreaField";
import Page from "../../components/Page/Page";
import { useTranslation } from "react-i18next";
import "../../i18n";
import { useNavigate } from "react-router-dom";
const questions = [
  { label: "Yes, with a mortgage", value: "mortgage_yes" },
  { label: "Yes, without a mortgage", value: "mortgage_no" },
  { label: "No, I am renting", value: "renting" },
  { label: "No, it is owned by a family member", value: "family_owned" },
  { label: "Other (please explain)", value: "other" },
];
const AddressPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  // const [city, setCity] = useState(""); // SearchList
  const [actualAddress, setActualAddress] = useState(""); // TextField
  const [selectedRadio, setSelectedRadio] = useState(""); // RadioGroup
  const [otherText, setOtherText] = useState(""); // Textarea (if other)

  const handleSubmit = () => {
    // if (!city.trim()) {
    //   alert("Zəhmət olmasa şəhər seçin.");
    //   return;
    // }

    if (!actualAddress.trim()) {
      alert("Zəhmət olmasa faktiki ünvanı daxil edin.");
      return;
    }

    if (!selectedRadio) {
      alert("Zəhmət olmasa, bir cavab seçin.");
      return;
    }

    if (selectedRadio === "other" && !otherText.trim()) {
      alert("Zəhmət olmasa 'digər' sahəsini doldurun.");
      return;
    }
    navigate("/");
  };

  return (
    <Page className="address-page">
      <div className="address-page-fields">
        <TitleBlock
          title={t("addressPage.title")}
          desc={t("addressPage.description")}
        />
        {/* <SearchList value={city} onChange={setCity} /> */}
        <TextField
          label={t("addressPage.actualAddress")}
          value={actualAddress}
          onChange={(e) => setActualAddress(e.target.value)}
        />
        <RadioGroup
          labelText={t("addressPage.radioLabel")}
          options={questions}
          value={selectedRadio}
          onChange={setSelectedRadio}
        />
        {selectedRadio === "other" && (
          <TextareaField
            value={otherText}
            onChange={(e) => setOtherText(e.target.value)}
          />
        )}
      </div>

      <PrimaryButton
        caption={t("addressPage.primaryCaption")}
        onClick={handleSubmit}
      />
    </Page>
  );
};
export default AddressPage;
