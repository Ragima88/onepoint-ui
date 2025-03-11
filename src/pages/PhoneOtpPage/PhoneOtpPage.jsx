import "./phone-otp-page.scss";
import { useTranslation } from "react-i18next";
import "../../i18n";
import Page from "../../components/Page/Page";
import TitleBlock from "../../components/TitleBlock/TitleBlock";
import OtpField from "../../components/OtpField/OtpField";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import { useState } from "react";

const PhoneOtpPage = () => {
  const [disabled, setDisabled] = useState(false);
  const { t } = useTranslation();
  return (
    <Page className="phone-otp-page">
      <div className="phone-otp-page-top">
        <TitleBlock
          title={t("phoneOtpPage.title")}
          desc={t("phoneOtpPage.desc")}
        />
        <OtpField disabled={disabled} />
      </div>
      <PrimaryButton
        caption={t("phoneOtpPage.primaryCaption")}
        onClick={() => setDisabled(true)}
      />
    </Page>
  );
};
export default PhoneOtpPage;
