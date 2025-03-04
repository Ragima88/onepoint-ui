import "./consent-page.scss";
import TitleBlock from "../../components/TitleBlock/TitleBlock";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import { Link } from "react-router-dom";
import SecondaryButton from "../../components/SecondaryButton/SecondaryButton";
import Page from "../../components/Page/Page";
import { useTranslation } from "react-i18next";
import "../../i18n";
const ConsentPage = () => {
  const { t } = useTranslation();
  return (
    <Page className="consent-page">
      <div className="consent-page-content">
        <TitleBlock
          title={t("consentPage.title")}
          desc={t("consentPage.description")}
        />
        <Link className="consent-page-content-link" to={""}>
          {t("consentPage.restrictions")}
        </Link>
        <label className="consent-page-content-label">
          <input type="checkbox" name="" id="" />
          {t("consentPage.checkboxLabel")}
        </label>
      </div>
      <div className="consent-page-bottom">
        <PrimaryButton caption={t("consentPage.primaryCaption")} />
        <SecondaryButton caption={t("consentPage.secondaryCaption")} />
      </div>
    </Page>
  );
};
export default ConsentPage;
