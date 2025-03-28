import "./language-page.scss";
import Page from "../../components/Page/Page";
import RadioGroup from "../../components/RadioGroup/RadioGroup";
import { useTranslation } from "react-i18next";
import "../../i18n";
import { useState } from "react";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";

const language = [
  { label: "Azərbaycan dili", value: "az" },
  { label: "İngilis dili", value: "en" },
];

const LanguagePage = () => {
  const { t } = useTranslation();
  const [lang, setLang] = useState();
  return (
    <Page className={"language-page"}>
      <RadioGroup options={language} value={lang} onChange={setLang} />
      <PrimaryButton caption={t("languagePage.primaryCaption")} />
    </Page>
  );
};
export default LanguagePage;
