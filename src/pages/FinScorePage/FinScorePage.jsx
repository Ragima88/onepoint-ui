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

import { Link } from "react-router-dom";
import VerticalVideoPlayer from "../../components/VerticalVideoPlayer/VerticalVideoPlayer";
import FileUpload from "../../components/FileUpload/FileUpload";
import Warning from "../../components/Warning/Warning";
import { useState } from "react";
const FinScorePage = () => {
  const { t } = useTranslation();

  const [nameError, setNameError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [fileError, setFileError] = useState(false);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = () => {
    const isNameEmpty = !name.trim();
    const isPhoneEmpty = !phone.trim();
    const isFileMissing = !uploadedFile;

    setNameError(isNameEmpty);
    setPhoneError(isPhoneEmpty);

    if (
      isNameEmpty ||
      isPhoneEmpty ||
      isFileMissing ||
      phoneError ||
      fileError ||
      nameError
    ) {
      alert("Zəhmət olmasa, bütün sahələri doldurun və fayl yükləyin.");
      return;
    }
  };

  const handleNameChange = (value) => {
    setName(value);
  };
  const handlePhoneChange = (value) => {
    setPhone(value);
  };

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
          value={name}
          onChange={handleNameChange}
          error={nameError}
          setError={setNameError}
        />

        <PhoneField
          value={phone}
          onChange={handlePhoneChange}
          label={t("finScorePage.phoneLabel")}
          error={phoneError}
          setError={setPhoneError}
        />

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
          error={fileError}
          setError={setFileError}
          onFileChange={setUploadedFile}
        />
        <Warning message={t("finScorePage.warningMessage")} />
      </div>
      <div className="fin-score-page-bottom">
        <PrimaryButton
          caption={t("finScorePage.primaryCaption")}
          onClick={handleSubmit}
        />
      </div>
    </Page>
  );
};
export default FinScorePage;
