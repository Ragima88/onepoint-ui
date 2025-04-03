import "./contacts-page.scss";
import Page from "../../components/Page/Page";
import { useTranslation } from "react-i18next";
import "../../i18n";
import TitleBlock from "../../components/TitleBlock/TitleBlock";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import LoanBottom from "../../components/LoanBottom/LoanBottom";
import Warning from "../../components/Warning/Warning";
import PhoneNumber from "../../components/PhoneNumber/PhoneNumber";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ContactsPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [name2, setName2] = useState("");
  const [name3, setName3] = useState("");
  const [phone, setPhone] = useState("");
  const [phone2, setPhone2] = useState("");
  const [phone3, setPhone3] = useState("");
  const [phoneError, setPhoneError] = useState(false);
  const [phoneError2, setPhoneError2] = useState(false);
  const [phoneError3, setPhoneError3] = useState(false);
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = () => {
    if (!name.trim() || !name2.trim() || !name3.trim()) {
      alert("Zəhmət olmasa bütün ad sahələrini doldurun.");
      return;
    }

    if (phone.length < 9 || phone2.length < 9 || phone3.length < 9) {
      alert("Zəhmət olmasa bütün nömrələri düzgün daxil edin.");
      return;
    }

    if (!agreed) {
      alert("Zəhmət olmasa, şərtlərlə razılaşın.");
      return;
    }

    navigate("/");
  };
  const items = t("contactsPage.items", { returnObjects: true });
  return (
    <Page className={"contacts-page"}>
      <div className="contacts-page-main">
        <TitleBlock
          title={t("contactsPage.title")}
          desc={t("contactsPage.desc")}
        />
        <Warning message={t("contactsPage.warningMessage")} />

        <div className="contacts-page-phone-numbers">
          <div className="contacts-page-phone-number">
            <span className="user-number">{items[0].personFirst}</span>
            <PhoneNumber
              nameLabel={t("contactsPage.nameLabel")}
              namePlaceHolder={t("contactsPage.namePlaceHolder")}
              phoneLabel={t("contactsPage.phoneLabel")}
              name={name}
              setName={setName}
              phone={phone}
              setPhone={setPhone}
              phoneError={phoneError}
              setPhoneError={setPhoneError}
            />
          </div>
          <div className="contacts-page-phone-number">
            <span className="user-number">{items[1].personSecond}</span>
            <PhoneNumber
              nameLabel={t("contactsPage.nameLabel")}
              namePlaceHolder={t("contactsPage.namePlaceHolder")}
              phoneLabel={t("contactsPage.phoneLabel")}
              name={name2}
              setName={setName2}
              phone={phone2}
              setPhone={setPhone2}
              phoneError={phoneError2}
              setPhoneError={setPhoneError2}
            />
          </div>
          <div className="contacts-page-phone-number">
            <span className="user-number">{items[2].personThird}</span>
            <PhoneNumber
              nameLabel={t("contactsPage.nameLabel")}
              namePlaceHolder={t("contactsPage.namePlaceHolder")}
              phoneLabel={t("contactsPage.phoneLabel")}
              name={name3}
              setName={setName3}
              phone={phone3}
              setPhone={setPhone3}
              phoneError={phoneError3}
              setPhoneError={setPhoneError3}
            />
          </div>
        </div>

        <Warning message={t("contactsPage.warningMessage")} />
        <label className="contacts-page-checkbox-label">
          <input
            type="checkbox"
            checked={agreed}
            onChange={(e) => {
              setAgreed(e.target.checked);
            }}
          />
          {t("contactsPage.checkboxLabel")}
        </label>
      </div>
      <div className="contacts-page-bottom">
        <PrimaryButton
          className="contacts-page-btn"
          caption={t("contactsPage.primaryCaption")}
          onClick={handleSubmit}
        />
        <LoanBottom />
      </div>
    </Page>
  );
};
export default ContactsPage;
