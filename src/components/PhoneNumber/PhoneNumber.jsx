import NameField from "../NameField/NameField";
import PhoneField from "../PhoneField/PhoneField";
import "./phone-number.scss";
const PhoneNumber = ({
  nameLabel,
  namePlaceHolder,
  phoneLabel,
  name,
  setName,
  phone,
  setPhone,
  phoneError,
  setPhoneError,
}) => {
  return (
    <div className="phone-number-fields">
      <NameField
        label={nameLabel}
        placeholder={namePlaceHolder}
        value={name}
        onChange={setName}
      />
      <PhoneField
        label={phoneLabel}
        value={phone}
        setValue={setPhone}
        error={phoneError}
        setError={setPhoneError}
      />
    </div>
  );
};
export default PhoneNumber;
