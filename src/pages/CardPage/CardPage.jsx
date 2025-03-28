import "./card-page.scss";
import Page from "../../components/Page/Page";
import TitleBlock from "../../components/TitleBlock/TitleBlock";
import NameField from "../../components/NameField/NameField";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import LoanBottom from "../../components/LoanBottom/LoanBottom";
import Warning from "../../components/Warning/Warning";
import { useTranslation } from "react-i18next";
import "../../i18n";

const CardPage = () => {
  const { t } = useTranslation();
  return (
    <Page className={"card-page"}>
      <div className="card-page-main">
        <TitleBlock title={t("cardPage.title")} desc={t("cardPage.desc")} />
        <Warning message={t("cardPage.message")} />
        <NameField
          label={t("cardPage.nameLabel")}
          placeholder={t("cardPage.namePlaceHolder")}
        />
      </div>
      <div className="card-page-bottom">
        <PrimaryButton
          className="card-page-btn"
          caption={t("cardPage.primaryCaption")}
        />
        <LoanBottom />
      </div>
    </Page>
  );
};
export default CardPage;
