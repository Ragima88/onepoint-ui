import Page from "../../components/Page/Page";
import TitleBlock from "../../components/TitleBlock/TitleBlock";
import Image from "../../components/Image/Image";
import scoring from "../../assets/images/scoring.png";
import "./fin-score-page.scss";
import { useTranslation } from "react-i18next";
import "../../i18n";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import NameField from "../../components/NameField/NameField";
import PhoneField from "../../components/PhoneField/PhoneField";
import docIcon from "../../assets/icons/doc-icon.png";
import warning from "../../assets/icons/warning.png";
import { Link } from "react-router-dom";
import VerticalVideoPlayer from "../../components/VerticalVideoPlayer/VerticalVideoPlayer";
import FileUpload from "../../components/FileUpload/FileUpload";
const FinScorePage = () => {
  const { t } = useTranslation();
  return (
    <Page className={"fin-score-page"}>
      <div className="fin-score-page-top">
        <TitleBlock
          title={t("finScorePage.title")}
          desc={t("finScorePage.description")}
        />
        <NameField
          label={t("finScorePage.nameLabel")}
          placeholder={t("finScorePage.namePlaceHolder")}
        />
        <PhoneField label={t("finScorePage.phoneLabel")} />
        <div className="scoring">
          <Image className="scoring-img" src={scoring} />
          <div className="scoring-content">
            {t("finScorePage.scoringContent")}
          </div>
        </div>
        <Link className="fin-doc" to={""}>
          <Image className="fin-doc-img" src={docIcon} />
          <span>{t("finScorePage.finDocLink")}</span>
        </Link>
        <div className="video-player">
          <h2>{t("finScorePage.videoPlayerTitle")}</h2>
          <VerticalVideoPlayer
            src={`https://cdn.prod.website-files.com/64c64642a946980a44b341c3%2F67be51774724f7a688c4377b_fin-score-transcode.mp4`}
          />
        </div>
        <FileUpload
          title={t("finScorePage.fileUploadTitle")}
          desc={t("finScorePage.fileUploadDesc")}
          btn={t("finScorePage.fileUploadBtn")}
        />
        <div className="warning">
          <Image className="warning-img" src={warning} />
          <span className="warning-message">
            {t("finScorePage.warningMessage")}
          </span>
        </div>
      </div>
      <div className="fin-score-page-bottom">
        <PrimaryButton caption={t("finScorePage.primaryCaption")} />
      </div>
    </Page>
  );
};
export default FinScorePage;
