import "./contacts-page.scss";
import Page from "../../components/Page/Page";
import { useTranslation } from "react-i18next";
import "../../i18n";
import TitleBlock from "../../components/TitleBlock/TitleBlock";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import LoanBottom from "../../components/LoanBottom/LoanBottom";
import Warning from "../../components/Warning/Warning";
import NameField from "../../components/NameField/NameField";
import PhoneField from "../../components/PhoneField/PhoneField";
import SelectField from "../../components/SelectField/SelectField";
import PhoneNumber from "../../components/PhoneNumber/PhoneNumber";

const ContactsPage = () => {
  const { t } = useTranslation();
  return (
    <Page className={"contacts-page"}>
      <div className="contacts-page-main">
        <TitleBlock
          title={t("contactsPage.title")}
          desc={t("contactsPage.desc")}
        />
        <Warning message={t("contactsPage.warningMessage")} />

        <div className="contacts-page-phone-numbers">
          {t("contactsPage.items", { returnObjects: true }).map((item) => (
            <PhoneNumber
              key={item.id}
              personFirst={item.personFirst}
              nameLabel={t("contactsPage.nameLabel")}
              namePlaceHolder={t("contactsPage.namePlaceHolder")}
              phoneLabel={t("contactsPage.phoneLabel")}
            />
          ))}
        </div>

        <Warning message={t("contactsPage.warningMessage")} />
        <label className="contacts-page-checkbox-label">
          <input type="checkbox" name="" id="" />
          {t("contactsPage.checkboxLabel")}
        </label>
      </div>
      <div className="contacts-page-bottom">
        <PrimaryButton
          className="contacts-page-btn"
          caption={t("contactsPage.primaryCaption")}
        />
        <LoanBottom />
      </div>
    </Page>
  );
};
export default ContactsPage;
