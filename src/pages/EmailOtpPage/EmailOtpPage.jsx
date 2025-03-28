import "./email-otp-page.scss";
import { useTranslation } from "react-i18next";
import "../../i18n";
import Page from "../../components/Page/Page";
import TitleBlock from "../../components/TitleBlock/TitleBlock";
import OtpField from "../../components/OtpField/OtpField";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import { useState } from "react";

const EmailOtpPage = () => {
  const [disabled, setDisabled] = useState(false);
  const [otpCode, setOtpCode] = useState("");
  const { t } = useTranslation();

  const handleSubmit = () => {
    if (otpCode.length !== 4) {
      alert("Zəhmət olmasa, 4 rəqəmli OTP kodunu daxil edin.");
      return;
    }

    setDisabled(true);
    // Proceed with API call or navigation
  };

  return (
    <Page className="email-otp-page">
      <div className="email-otp-page-top">
        <TitleBlock
          title={t("emailOtpPage.title")}
          desc={t("emailOtpPage.desc")}
        />
        <OtpField disabled={disabled} onOtpComplete={setOtpCode} />
      </div>
      <PrimaryButton
        caption={t("emailOtpPage.primaryCaption")}
        onClick={handleSubmit}
      />
    </Page>
  );
};
export default EmailOtpPage;
