import Page from "../../components/Page/Page";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import TitleBlock from "../../components/TitleBlock/TitleBlock";
import "./password-page.scss";
import { useTranslation } from "react-i18next";
import "../../i18n";

const PasswordPage = () => {
  const { t } = useTranslation();
  return (
    <Page className={"password-page"}>
      <div className="password-page-top">
        <TitleBlock
          title={t("passwordPage.title")}
          desc={t("passwordPage.description")}
        />
      </div>
      <div className="password-page-bottom">
        <PrimaryButton caption={t("passwordPage.primaryCaption")} />
      </div>
    </Page>
  );
};
export default PasswordPage;
