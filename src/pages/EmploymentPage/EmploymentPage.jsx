import "./employment-page.scss";
import TitleBlock from "../../components/TitleBlock/TitleBlock";
import RadioGroup from "../../components/RadioGroup/RadioGroup";
import { useState } from "react";
import TextField from "../../components/TextField/TextField";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import Page from "../../components/Page/Page";
import { useTranslation } from "react-i18next";
import "../../i18n";
import { useNavigate } from "react-router-dom";
const status = [
  { label: "Bəli, rəsmi olaraq işləyirəm", value: "bəli" },
  { label: "Xeyr, rəsmi iş yerim yoxdur", value: "xeyr" },
];
const EmploymentPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [value, setValue] = useState("");
  const [workPlace, setWorkPlace] = useState("");

  const handleClick = () => {
    if (!value || (value === "bəli" && !workPlace.trim())) {
      return;
    }
    navigate("/address");
  };

  return (
    <Page className="employment-page">
      <div className="employment-page-fields">
        <TitleBlock
          title={t("employmentPage.title")}
          desc={t("employmentPage.description")}
        />
        <RadioGroup options={status} value={value} onChange={setValue} />
        {value === "bəli" && (
          <TextField
            label={t("employmentPage.workPlaceLabel")}
            value={workPlace}
            onChange={(e) => setWorkPlace(e.target.value)}
          />
        )}
      </div>
      <PrimaryButton
        onClick={handleClick}
        caption={t("employmentPage.primaryCaption")}
        disabled={!value || (value === "bəli" && !workPlace.trim())}
      />
    </Page>
  );
};
export default EmploymentPage;
