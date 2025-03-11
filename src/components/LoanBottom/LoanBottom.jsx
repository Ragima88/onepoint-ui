import "./loan-bottom.scss";
import credit from "../../assets/icons/credit.svg";
import history from "../../assets/icons/history.svg";
import scoring from "../../assets/icons/scoring.svg";
import support from "../../assets/icons/support.svg";
import { useTranslation } from "react-i18next";
import "../../i18n";
import Image from "../Image/Image";

const iconMapping = {
  credit: credit,
  history: history,
  scoring: scoring,
  support: support,
};

const LoanBottom = () => {
  const { t } = useTranslation();
  const menuItems = Object.keys(t("loanBottom.menu", { returnObjects: true }));
  return (
    <ul className="loan-bottom-menu">
      {menuItems.map((item) => (
        <li className="loan-bottom-menu-item" key={item}>
          {iconMapping[item] && (
            <Image
              className={"loan-bottom-menu-icon"}
              src={iconMapping[item]}
              alt={t(`menu.${item}`)}
            />
          )}
          {t(`loanBottom.menu.${item}`)}
        </li>
      ))}
    </ul>
  );
};
export default LoanBottom;
