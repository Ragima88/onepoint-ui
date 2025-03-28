import "./info-check-page.scss";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import TitleBlock from "../../components/TitleBlock/TitleBlock";
import Page from "../../components/Page/Page";
import { useTranslation } from "react-i18next";
import "../../i18n";
import Button from "../../components/Button/Button";
import TextField from "../../components/TextField/TextField";
import Image from "../../components/Image/Image";
import price from "../../assets/icons/manat.svg";
import percent from "../../assets/icons/percent.svg";
import transfer from "../../assets/icons/transfer-to-card.svg";
import clock from "../../assets/icons/clock.svg";
import calendar from "../../assets/icons/calendar-check.svg";
import cardPlus from "../../assets/icons/credit-card-plus.svg";

const iconMapping = {
  price: price,
  percent: percent,
  transfer: transfer,
  clock: clock,
  calendar: calendar,
  cardPlus: cardPlus,
};

const InfoCheckPage = () => {
  const { t } = useTranslation();
  const loanInfo = t("infoCheckPage.loanInfo", { returnObjects: true });

  return (
    <Page className={"info-check-page"}>
      <div className="info-check-page-main">
        <TitleBlock
          title={t("infoCheckPage.title")}
          desc={t("infoCheckPage.desc")}
        />
        <TextField
          className="info-check-number-field"
          label={t("infoCheckPage.cartNumberLabel")}
          placeholder={t("infoCheckPage.cartNumberPlaceholder")}
        />
        <TextField
          className="info-check-name-field"
          label={t("infoCheckPage.cartNameLabel")}
          placeholder={t("infoCheckPage.cartNamePlaceholder")}
        />
        <ul className="credit-info">
          {Object.keys(loanInfo.desc).map((item) => (
            <li className="credit-info-item" key={item}>
              {iconMapping[item] && (
                <Image
                  className={"credit-info-icon"}
                  src={iconMapping[item]}
                  alt={item}
                />
              )}
              <div className="credit-info-content">
                <span>{loanInfo.desc[item]}</span>
                <span>{loanInfo.value[item]}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="info-check-page-bottom">
        <PrimaryButton
          className="info-check-page-primary-btn"
          caption={t("infoCheckPage.primaryCaption")}
        />
        <Button
          className="info-check-page-btn"
          caption={t("infoCheckPage.buttonCaption")}
        />
      </div>
    </Page>
  );
};
export default InfoCheckPage;
