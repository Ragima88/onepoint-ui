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

const options = [
  { label: "Select an option", value: "", disabled: true },
  { label: "Option 1", value: "option1" },
  { label: "Option 2", value: "option2" },
  { label: "Option 3", value: "option3" },
];
const PersonalInfoPage = () => {
  const { t } = useTranslation();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [date, setDate] = useState(null);
  const finClick = () => {
    setDrawerOpen(true);
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
          options={options}
          value={date}
          onChange={setDate}
        />
        <IdNumberField label={t("personalPage.idNumberLabel")} />
        <div className="personal-info-fin-text">
          <FinCodeField
            label={t("personalPage.finCodeLabel")}
            placeholder={t("personalPage.finPlaceholder")}
          />
          <div className="personal-info-text">
            <Image className="info-icon" src={infoIcon} />
            <span>{t("personalPage.attention")}</span>
          </div>
          <div onClick={finClick} className="fin-link">
            FİN kod nədir?
          </div>
        </div>
      </div>
      <PrimaryButton caption={t("personalPage.primaryCaption")} />
      <Drawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <h2 className="fin-title">FİN kod nədir?</h2>
        <Image src={passport} />
      </Drawer>
    </Page>
  );
};
export default PersonalInfoPage;
