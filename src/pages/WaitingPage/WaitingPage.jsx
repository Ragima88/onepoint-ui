import "./waiting-page.scss";
import Page from "../../components/Page/Page";
import TitleBlock from "../../components/TitleBlock/TitleBlock";
import LoanBottom from "../../components/LoanBottom/LoanBottom";
import Image from "../../components/Image/Image";
import user from "../../assets/icons/users-right.png";
import { useTranslation } from "react-i18next";
import "../../i18n";

const WaitingPage = () => {
  const { t } = useTranslation();
  return (
    <Page className={"waiting-page"}>
      <div className="waiting-page-main">
        <Image className="waiting-img" src={user} />
        <TitleBlock
          title={t("waitingPage.title")}
          desc={t("waitingPage.desc")}
        />
      </div>
      <LoanBottom />
    </Page>
  );
};
export default WaitingPage;
