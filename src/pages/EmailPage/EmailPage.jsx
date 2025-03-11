import Page from "../../components/Page/Page";
import TitleBlock from "../../components/TitleBlock/TitleBlock";
import EmailField from "../../components/EmailField/EmailField";
import { useTranslation } from "react-i18next";
import "../../i18n";

import "./email-page.scss";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import { useState } from "react";
const EmailPage = () => {
  const { t } = useTranslation();
  const [disabled, setDisabled] = useState(false);

  return (
    <Page className="email-page">
      <div className="email-page-top">
        <TitleBlock title={t("emailPage.title")} desc={t("emailPage.desc")} />
        <EmailField label={t("emailPage.emailLabel")} disabled={disabled} />
      </div>
      <PrimaryButton
        to={"/email-otp"}
        caption={t("emailPage.primaryCaption")}
        onClick={() => setDisabled(true)}
      />
    </Page>
  );
};
export default EmailPage;
