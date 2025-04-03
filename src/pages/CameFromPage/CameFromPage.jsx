import "./came-from-page.scss";
import TitleBlock from "../../components/TitleBlock/TitleBlock";
import RadioGroup from "../../components/RadioGroup/RadioGroup";
import { useState } from "react";
import TextareaField from "../../components/TextAreaField/TextAreaField";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import Page from "../../components/Page/Page";
import { useTranslation } from "react-i18next";
import "../../i18n";
import { useNavigate } from "react-router-dom";

const radioGroup = [
  { label: "Instagram", value: "instagram" },
  { label: "Facebook", value: "facebook" },
  { label: "Youtube", value: "youtube" },
  { label: "Tik-Tok", value: "tiktok" },
  { label: "Digər", value: "digər" },
];
const CameFromPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [selected, setSelected] = useState("");
  const [otherValue, setOtherValue] = useState("");

  const handleClick = () => {
    if (!selected) {
      alert("Zəhmət olmasa, bir seçim edin.");
      return;
    }

    if (selected === "digər" && !otherValue.trim()) {
      alert("Zəhmət olmasa, digər sahəsini doldurun.");
      return;
    }

    navigate("/employment");
  };

  return (
    <Page className="came-from-page">
      <div className="came-from-page-fields">
        <TitleBlock
          title={t("cameFromPage.title")}
          desc={t("cameFromPage.description")}
        />
        <RadioGroup
          options={radioGroup}
          value={selected}
          onChange={setSelected}
        />
        {selected === "digər" && (
          <TextareaField
            value={otherValue}
            onChange={(e) => setOtherValue(e.target.value)}
          />
        )}
      </div>

      <PrimaryButton
        onClick={handleClick}
        caption={t("cameFromPage.primaryCaption")}
      />
    </Page>
  );
};
export default CameFromPage;
