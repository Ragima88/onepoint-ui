import "./not-found-page.scss";
import Page from "../../components/Page/Page";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import LoanBottom from "../../components/LoanBottom/LoanBottom";
import Image from "../../components/Image/Image";
import notFound from "../../assets/images/404 error.png";
import { useTranslation } from "react-i18next";
import "../../i18n";
import TitleBlock from "../../components/TitleBlock/TitleBlock";

const NotFoundPage = () => {
  const { t } = useTranslation();
  return (
    <Page className={"not-found-page"}>
      <div className="not-found-page-main">
        <Image className="not-found-page-img" src={notFound} />
        <TitleBlock
          title={t("notFoundPage.title")}
          desc={t("notFoundPage.desc")}
        />
      </div>
      <div className="not-found-page-bottom">
        <PrimaryButton
          className="not-found-page-primary-btn"
          caption={t("notFoundPage.primaryCaption")}
        />
        <LoanBottom />
      </div>
    </Page>
  );
};
export default NotFoundPage;
