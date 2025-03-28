import "./success-page.scss";
import Page from "../../components/Page/Page";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import LoanBottom from "../../components/LoanBottom/LoanBottom";
import Image from "../../components/Image/Image";
import success from "../../assets/icons/success.png";
import { useTranslation } from "react-i18next";
import "../../i18n";
import TitleBlock from "../../components/TitleBlock/TitleBlock";

const SuccessPage = () => {
  const { t } = useTranslation();
  return (
    <Page className={"success-page"}>
      <div className="success-page-main">
        <Image className="success-page-img" src={success} />
        <TitleBlock
          title={t("successPage.title")}
          desc={t("successPage.desc")}
        />
        <p className="success-page-info">{t("successPage.info")}</p>
      </div>
      <div className="success-page-bottom">
        <PrimaryButton
          className="success-page-primary-btn"
          caption={t("successPage.primaryCaption")}
        />
        <LoanBottom />
      </div>
    </Page>
  );
};
export default SuccessPage;
