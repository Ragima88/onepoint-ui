import "./warning-page.scss";
import Page from "../../components/Page/Page";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import Button from "../../components/Button/Button";
import Image from "../../components/Image/Image";
import warning from "../../assets/icons/warn.svg";
import { useTranslation } from "react-i18next";
import "../../i18n";
import TitleBlock from "../../components/TitleBlock/TitleBlock";

const WarningPage = () => {
  const { t } = useTranslation();
  return (
    <Page className={"warning-page"}>
      <div className="warning-page-main">
        <Image className="warning-page-img" src={warning} />
        <TitleBlock
          title={t("warningPage.title")}
          desc={t("warningPage.desc")}
        />
      </div>
      <div className="warning-page-bottom">
        <PrimaryButton
          className="warning-page-primary-btn"
          caption={t("warningPage.primaryCaption")}
        />
        <Button caption={t("warningPage.buttonCaption")} />
      </div>
    </Page>
  );
};
export default WarningPage;
