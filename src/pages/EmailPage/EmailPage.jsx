import Page from "../../components/Page/Page";
import TitleBlock from "../../components/TitleBlock/TitleBlock";
import EmailField from "../../components/EmailField/EmailField";
import { useTranslation } from "react-i18next";
import "../../i18n";

import "./email-page.scss";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const EmailPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [disabled, setDisabled] = useState(false);
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = () => {
    if (!value.trim() || error) {
      alert("Zəhmət olmasa, düzgün email daxil edin.");
      return;
    }
    setDisabled(true);
    navigate("/email-otp");
  };

  return (
    <Page className="email-page">
      <div className="email-page-top">
        <TitleBlock title={t("emailPage.title")} desc={t("emailPage.desc")} />
        <EmailField
          label={t("emailPage.emailLabel")}
          disabled={disabled}
          value={value}
          setValue={setValue}
          error={error}
          setError={setError}
        />
      </div>
      <PrimaryButton
        caption={t("emailPage.primaryCaption")}
        onClick={handleSubmit}
      />
    </Page>
  );
};
export default EmailPage;
