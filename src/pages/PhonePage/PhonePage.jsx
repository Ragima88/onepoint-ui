import Page from "../../components/Page/Page";
import TitleBlock from "../../components/TitleBlock/TitleBlock";
import PhoneField from "../../components/PhoneField/PhoneField";
import { useTranslation } from "react-i18next";
import "../../i18n";

import "./phone-page.scss";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import { useState } from "react";
const PhonePage = () => {
  const { t } = useTranslation();
  const [disabled, setDisabled] = useState(false);

  return (
    <Page className="phone-page">
      <div className="phone-page-top">
        <TitleBlock title={t("phonePage.title")} desc={t("phonePage.desc")} />
        <PhoneField label={t("phonePage.phoneLabel")} disabled={disabled} />
      </div>
      <PrimaryButton
        to={"/phone-otp"}
        caption={t("phonePage.primaryCaption")}
        onClick={() => setDisabled(true)}
      />
    </Page>
  );
};
export default PhonePage;
