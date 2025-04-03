import "./number-indicator.scss";
import Image from "../../components/Image/Image";
import classNames from "classnames";
import { useTranslation } from "react-i18next";
import "../../i18n";
import messageGray from "../../assets/icons/message-gray.svg";
import messageBlack from "../../assets/icons/message.black.svg";
import pending from "../../assets/icons/pending.svg";
import approved from "../../assets/icons/approved.svg";
import rejected from "../../assets/icons/rejected.svg";

const NumberIndicator = ({
  message,
  number,
  status = "pending",
  disabled,
  onClick,
}) => {
  const { t } = useTranslation();

  const NumberClass = classNames({
    [`number-indicator`]: true,
    [`${status}`]: true,
    [`disabled`]: disabled,
  });

  const statusText =
    status === "rejected"
      ? "Imtina etdi"
      : status === "approved"
      ? "Təsdiq etdi"
      : "Təsdiq gözlənilir";

  const icon =
    status === "rejected"
      ? rejected
      : status === "approved"
      ? approved
      : pending;

  return (
    <div className={NumberClass}>
      <div className="number-indicator-left">
        <div className="number-indicator-left-top">
          <Image className={"number-indicator-left-top-icon"} src={icon} />
          <div className="number-indicator-left-top-status">{statusText}</div>
        </div>
        <div className="number-indicator-left-bottom">+994 55 345 55 75</div>
      </div>
      <div
        className={"number-indicator-right"}
        onClick={!disabled ? onClick : undefined}
      >
        <span>{message}</span>
        <Image
          className="number-indicator-right-icon"
          src={disabled ? messageGray : messageBlack}
        />
      </div>
    </div>
  );
};
export default NumberIndicator;
