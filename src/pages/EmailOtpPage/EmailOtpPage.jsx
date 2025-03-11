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
  const { t } = useTranslation();
  return (
    <Page className="email-otp-page">
      <div className="email-otp-page-top">
        <TitleBlock
          title={t("emailOtpPage.title")}
          desc={t("emailOtpPage.desc")}
        />
        <OtpField disabled={disabled} />
      </div>
      <PrimaryButton
        caption={t("emailOtpPage.primaryCaption")}
        onClick={() => setDisabled(true)}
      />
    </Page>
  );
};
export default EmailOtpPage;
