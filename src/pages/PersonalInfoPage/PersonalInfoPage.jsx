import TitleBlock from "../../components/TitleBlock/TitleBlock";
import DateSelector from "../../components/DateSelector/DateSelector";
import "./personal-info-page.scss";
import IdNumberField from "../../components/IdNumberField/IdNumberField";
import FinCodeField from "../../components/FinCodeField/FinCodeField";
import Image from "../../components/Image/Image";
import infoIcon from "../../assets/icons/info-icon.svg";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import { useState } from "react";
import Page from "../../components/Page/Page";
import { useTranslation } from "react-i18next";
import "../../i18n";
import Drawer from "../../components/Drawer/Drawer";
import passport from "../../assets/images/passport.png";

const PersonalInfoPage = () => {
  const { t } = useTranslation();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [date, setDate] = useState(null);
  const [type, setType] = useState("AZE");
  const [number, setNumber] = useState("");
  const [fin, setFin] = useState("");
  const [loading, setLoading] = useState(false);
  const [finError, setFinError] = useState(false);
  const [idNumberError, setIdNumberError] = useState(false);

  const finClick = () => {
    setDrawerOpen(true);
  };

  const validation = () => {
    const isDateValid = !!date;
    const isFinValid = fin.trim().length === 7;
    const isIdValid =
      (type === "AZE" && number.trim().length === 8) ||
      (type === "AA" && number.trim().length === 7);

    setFinError(!isFinValid);
    setIdNumberError(!isIdValid);

    if (!isDateValid || !isFinValid || !isIdValid) {
      alert("Zəhmət olmasa bütün sahələri düzgün doldurun.");
      return false;
    }

    return true;
  };

  const handleSubmit = () => {
    if (validation()) {
      setLoading(true);
    }
  };

  return (
    <Page className="personal-info-page">
      <div className="personal-info-fields">
        <TitleBlock
          title={t("personalPage.title")}
          desc={t("personalPage.description")}
        />
        <DateSelector
          labelText={t("personalPage.dateLabel")}
          onChange={setDate}
          disabled={loading}
        />
        <IdNumberField
          label={t("personalPage.idNumberLabel")}
          type={type}
          number={number}
          setType={setType}
          setNumber={setNumber}
          disabled={loading}
          error={idNumberError}
          setError={setIdNumberError}
        />
        <div className="personal-info-fin-text">
          <FinCodeField
            label={t("personalPage.finCodeLabel")}
            placeholder={t("personalPage.finPlaceholder")}
            fin={fin}
            setFin={setFin}
            disabled={loading}
            error={finError}
            setError={setFinError}
          />
          <div className="personal-info-text">
            <Image className="info-icon" src={infoIcon} />
            <span>{t("personalPage.attention")}</span>
          </div>
          <div onClick={finClick} className="fin-link">
            {t("personalPage.finQuestion")}
          </div>
        </div>
      </div>
      <PrimaryButton
        onClick={handleSubmit}
        caption={t("personalPage.primaryCaption")}
        loading={loading}
      />
      <Drawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <h2 className="fin-title">FİN kod nədir?</h2>
        {/* Todo: Will use another component and ad to i18n */}
        <Image src={passport} />
      </Drawer>
    </Page>
  );
};
export default PersonalInfoPage;
