import "./employment-page.scss";
import TitleBlock from "../../components/TitleBlock/TitleBlock";
import RadioGroup from "../../components/RadioGroup/RadioGroup";
import { useState } from "react";
import TextField from "../../components/TextField/TextField";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import Page from "../../components/Page/Page";
import { useTranslation } from "react-i18next";
import "../../i18n";
const status = [
  { label: "Bəli, rəsmi olaraq işləyirəm", value: "bəli" },
  { label: "Xeyr, rəsmi iş yerim yoxdur", value: "xeyr" },
];
const EmploymentPage = () => {
  const { t } = useTranslation();
  const [value, setValue] = useState("");
  return (
    <Page className="employment-page">
      <div className="employment-page-fields">
        <TitleBlock
          title={t("employmentPage.title")}
          desc={t("employmentPage.description")}
        />
        <RadioGroup options={status} value={value} onChange={setValue} />
        {value === "bəli" && (
          <TextField label={t("employmentPage.workPlaceLabel")} />
        )}
      </div>
      <PrimaryButton
        to={"/address"}
        caption={t("employmentPage.primaryCaption")}
      />
    </Page>
  );
};
export default EmploymentPage;
