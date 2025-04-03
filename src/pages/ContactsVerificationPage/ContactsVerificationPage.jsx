import "./contacts-verification-page.scss";
import Page from "../../components/Page/Page";
import TitleBlock from "../../components/TitleBlock/TitleBlock";
import { useTranslation } from "react-i18next";
import "../../i18n";
import NumberIndicator from "../../components/NumberIndicator/NumberIndicator";
import Image from "../../components/Image/Image";
import france from "../../assets/images/france.jpg";
import addNumberGray from "../../assets/icons/add-number-gray.svg";
import addNumberBlack from "../../assets/icons/add-number-black.svg";
import Timer from "../../components/Timer/Timer";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ContactsVerificationPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation();
  const [timerCompleted, setTimerCompleted] = useState(false);
  const [resetKey, setResetKey] = useState(0);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    if (params.get("reset") === "true") {
      handleReset();
      navigate("/contacts-verification", { replace: true });
    }
  }, [location.search, navigate]);

  const handleReset = () => {
    setTimerCompleted(false);
    setResetKey((prev) => prev + 1);
  };

  const handleClick = () => {
    if (timerCompleted) {
      navigate("/add-number");
    }
  };

  return (
    <Page className={"contacts-verification-page"}>
      <div className="contacts-verification-top">
        <TitleBlock
          title={t("contactsVerificationPage.title")}
          desc={t("contactsVerificationPage.desc")}
        />
        <Timer
          key={resetKey}
          startTime={1 * 10}
          onComplete={() => setTimerCompleted(true)}
        />
        <div className="contacts-verification-main">
          <NumberIndicator
            message={t("contactsVerificationPage.message")}
            disabled={!timerCompleted}
            onClick={handleReset}
          />
          <NumberIndicator
            message={t("contactsVerificationPage.message")}
            status="approved"
            disabled={!timerCompleted}
            onClick={handleReset}
          />
          <NumberIndicator
            message={t("contactsVerificationPage.message")}
            status="rejected"
            disabled={!timerCompleted}
            onClick={handleReset}
          />
        </div>
      </div>
      <div className="contacts-verification-bottom">
        <div
          className={`contacts-verification-bottom-button ${
            timerCompleted ? "active" : "disabled"
          }`}
          onClick={handleClick}
        >
          <Image
            className="contacts-verification-bottom-button-icon"
            src={timerCompleted ? addNumberBlack : addNumberGray}
          />
          <span>{t("contactsVerificationPage.buttonCaption")}</span>
        </div>
        <Image className="contacts-verification-bottom-pic" src={france} />
      </div>
    </Page>
  );
};
export default ContactsVerificationPage;
