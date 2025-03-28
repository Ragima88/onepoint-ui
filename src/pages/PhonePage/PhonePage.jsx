import Page from "../../components/Page/Page";
import TitleBlock from "../../components/TitleBlock/TitleBlock";
import PhoneField from "../../components/PhoneField/PhoneField";
import { useTranslation } from "react-i18next";
import "../../i18n";

import "./phone-page.scss";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const PhonePage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [disabled, setDisabled] = useState(false);
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  const handlePhoneChange = (value) => {
    setValue(value);
  };

  const handleSubmit = () => {
    if (!value.trim() || error) {
      alert("Zəhmət olmasa, nömrəni daxil edin.");
      return;
    }
    setDisabled(true);
    navigate("/phone-otp");
  };

  return (
    <Page className="phone-page">
      <div className="phone-page-top">
        <TitleBlock title={t("phonePage.title")} desc={t("phonePage.desc")} />
        <PhoneField
          label={t("phonePage.phoneLabel")}
          disabled={disabled}
          value={value}
          setValue={setValue}
          error={error}
          setError={setError}
          onChange={handlePhoneChange}
        />
      </div>
      <PrimaryButton
        caption={t("phonePage.primaryCaption")}
        onClick={handleSubmit}
      />
    </Page>
  );
};
export default PhonePage;
