import "./address-page.scss";
import TitleBlock from "../../components/TitleBlock/TitleBlock";
import SearchList from "../../components/SearchList/SearchList";
import TextField from "../../components/TextField/TextField";
import RadioGroup from "../../components/RadioGroup/RadioGroup";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import { useState } from "react";
import TextareaField from "../../components/TextAreaField/TextAreaField";
import Page from "../../components/Page/Page";
import { useTranslation } from "react-i18next";
import "../../i18n";
const questions = [
  { label: "Yes, with a mortgage", value: "mortgage_yes" },
  { label: "Yes, without a mortgage", value: "mortgage_no" },
  { label: "No, I am renting", value: "renting" },
  { label: "No, it is owned by a family member", value: "family_owned" },
  { label: "Other (please explain)", value: "other" },
];
const AddressPage = () => {
  const { t } = useTranslation();
  const [address, setAddress] = useState("");
  return (
    <Page className="address-page">
      <div className="address-page-fields">
        <TitleBlock
          title={t("addressPage.title")}
          desc={t("addressPage.description")}
        />
        <SearchList />
        <TextField label={t("addressPage.actualAddress")} />
        <RadioGroup
          labelText={t("addressPage.radioLabel")}
          options={questions}
          value={address}
          onChange={setAddress}
        />
        {address === "other" && <TextareaField />}
      </div>

      <PrimaryButton caption={t("addressPage.primaryCaption")} />
    </Page>
  );
};
export default AddressPage;
