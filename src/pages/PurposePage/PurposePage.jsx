import Page from "../../components/Page/Page";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import TitleBlock from "../../components/TitleBlock/TitleBlock";
import LoanBottom from "../../components/LoanBottom/LoanBottom";
import RadioGroup from "../../components/RadioGroup/RadioGroup";
import { useTranslation } from "react-i18next";
import "../../i18n";
import "./purpose-page.scss";
import { useState } from "react";
import TextareaField from "../../components/TextAreaField/TextAreaField";
const radioGroup = [
  { label: "Debt Consolidation", value: "Debt" },
  { label: "Credit Building", value: "Credit" },
  { label: "Renovation Loan", value: "Renovation" },
  { label: "Wedding Loans", value: "Wedding" },
  { label: "Debt Consolidation", value: "Debt" },
  { label: "Credit Building", value: "Credit" },
  { label: "Renovation Loan", value: "Renovation" },
  { label: "Wedding Loans", value: "Wedding" },
  { label: "Digər", value: "digər" },
];

const PurposePage = () => {
  const { t } = useTranslation();
  const [selected, setSelected] = useState("");
  return (
    <Page className={"purpose-page"}>
      <div className="purpose-page-main">
        <TitleBlock
          title={t("purposePage.title")}
          desc={t("purposePage.desc")}
        />
        <RadioGroup
          options={radioGroup}
          value={selected}
          onChange={setSelected}
        />
        {selected === "digər" && <TextareaField />}
      </div>
      <div className="purpose-page-bottom">
        <PrimaryButton
          className="purpose-page-btn"
          caption={t("purposePage.primaryCaption")}
        />
        <LoanBottom />
      </div>
    </Page>
  );
};
export default PurposePage;
