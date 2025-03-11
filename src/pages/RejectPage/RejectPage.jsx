import Image from "../../components/Image/Image";
import Page from "../../components/Page/Page";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import reject from "../../assets/images/reject.png";
import { useTranslation } from "react-i18next";
import "../../i18n";
import "./reject-page.scss";

const RejectPage = () => {
  const { t } = useTranslation();
  return (
    <Page className={"reject-page"}>
      <div className="reject-content">
        <Image className="reject-content-img" src={reject} />
        <div className="reject-content-title">{t("rejectPage.title")}</div>
        <div className="reject-content-desc">{t("rejectPage.desc")}</div>
      </div>
      <PrimaryButton caption={t("rejectPage.primaryCaption")} />
    </Page>
  );
};
export default RejectPage;
