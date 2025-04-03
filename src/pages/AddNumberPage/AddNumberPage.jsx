import Image from "../../components/Image/Image";
import Page from "../../components/Page/Page";
import TitleBlock from "../../components/TitleBlock/TitleBlock";
import Warning from "../../components/Warning/Warning";
import NameField from "../../components/NameField/NameField";
import PhoneField from "../../components/PhoneField/PhoneField";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import close from "../../assets/icons/x-close.svg";
import { useTranslation } from "react-i18next";
import "../../i18n";
import "./add-number-page.scss";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const AddNumberPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState(false);

  const isFormValid = name.trim() !== "" && phone.length === 9 && !phoneError;

  const handleClose = () => {
    navigate("/contacts-verification");
  };
  const handleSubmit = () => {
    if (name.trim() === "") {
      alert("Ad boş ola bilməz!");
      return;
    }

    if (phone.trim() === "" || phone.length < 9) {
      setPhoneError(true);
      return;
    }

    navigate("/contacts-verification?reset=true");
  };

  return (
    <Page className={"add-number-page"}>
      <Image
        className="add-number-page-close"
        src={close}
        onClick={handleClose}
      />
      <TitleBlock
        title={t("addNumberPage.title")}
        desc={t("addNumberPage.desc")}
      />
      <Warning message={t("addNumberPage.message")} />
      <NameField
        label={t("addNumberPage.nameLabel")}
        value={name}
        onChange={setName}
      />
      <PhoneField
        label={t("addNumberPage.phoneLabel")}
        value={phone}
        setValue={setPhone}
        error={phoneError}
        setError={setPhoneError}
      />
      <PrimaryButton
        caption={t("addNumberPage.primaryCaption")}
        onClick={handleSubmit}
        disabled={!isFormValid}
      />
    </Page>
  );
};
export default AddNumberPage;
