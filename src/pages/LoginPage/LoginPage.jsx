import "./login-page.scss";
import TitleBlock from "../../components/TitleBlock/TitleBlock";
import FinCodeField from "../../components/FinCodeField/FinCodeField";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import { Link } from "react-router-dom";
import Page from "../../components/Page/Page";
import { useTranslation } from "react-i18next";
import "../../i18n";

const LoginPage = () => {
  const { t } = useTranslation();
  return (
    <Page className="login-page">
      <div className="login-page-top">
        <TitleBlock
          title={t("loginPage.title")}
          desc={t("loginPage.description")}
        />
        <div className="login-page-fields">
          <FinCodeField label={t("loginPage.finCode")} />

          <Link className="login-page-link" to={""} onClick={""}>
            {t("loginPage.forgotPassword")}
          </Link>
        </div>
      </div>
      <div className="login-page-bottom">
        <PrimaryButton
          to={"/came-from"}
          caption={t("loginPage.primaryCaption")}
        />
        <div className="login-page-bottom-question">
          <span>{t("loginPage.notAccount")}&nbsp;</span>
          <Link
            className="login-page-bottom-question-link"
            to={"/personal-info"}
          >
            {t("loginPage.register")}
          </Link>
        </div>
      </div>
    </Page>
  );
};
export default LoginPage;
