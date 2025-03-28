import NameField from "../NameField/NameField";
import PhoneField from "../PhoneField/PhoneField";
import "./phone-number.scss";
const PhoneNumber = ({
  personFirst,
  nameLabel,
  namePlaceHolder,
  phoneLabel,
}) => {
  return (
    <div className="phone-number">
      <span className="user-number">{personFirst}</span>
      <NameField label={nameLabel} placeholder={namePlaceHolder} />

      <PhoneField label={phoneLabel} />
    </div>
  );
};
export default PhoneNumber;
