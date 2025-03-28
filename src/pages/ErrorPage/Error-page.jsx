import "./error-page.scss";
import Page from "../../components/Page/Page";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import LoanBottom from "../../components/LoanBottom/LoanBottom";
import Image from "../../components/Image/Image";
import errorPic from "../../assets/images/error-pic.png";
import { useTranslation } from "react-i18next";
import "../../i18n";
import TitleBlock from "../../components/TitleBlock/TitleBlock";

const ErrorPage = () => {
  const { t } = useTranslation();
  return (
    <Page className={"error-page"}>
      <div className="error-page-main">
        <Image className="error-page-img" src={errorPic} />
        <TitleBlock title={t("errorPage.title")} desc={t("errorPage.desc")} />
      </div>
      <div className="error-page-bottom">
        <PrimaryButton
          className="error-page-primary-btn"
          caption={t("errorPage.primaryCaption")}
        />
        <LoanBottom />
      </div>
    </Page>
  );
};
export default ErrorPage;
