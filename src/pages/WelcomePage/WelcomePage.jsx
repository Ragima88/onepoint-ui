import Logo from "../../components/Logo/Logo";
import TitleBlock from "../../components/TitleBlock/TitleBlock";
import Button from "../../components/Button/Button";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import { useTranslation } from "react-i18next";
import "../../i18n";

import "./welcome-page.scss";
import Page from "../../components/Page/Page";
const WelcomePage = () => {
  const { t } = useTranslation();

  return (
    <Page className="welcome-page">
      <div className="welcome-page-top">
        <Logo />
        <TitleBlock
          title={t("welcomePage.title")}
          desc={t("welcomePage.description")}
        />
      </div>
      <div className="welcome-page-bottom">
        <Button to={"/login"} caption={t("welcomePage.caption")} />
        <PrimaryButton
          to={"/personal-info"}
          caption={t("welcomePage.primaryCaption")}
        />
      </div>
    </Page>
  );
};
export default WelcomePage;
