import "./repayment-table.scss";

const RepaymentTable = ({ title }) => {
  return (
    <div className="repayment-section">
      <div className="repayment-section-title">{title}</div>
      <div className="repayment-section-table">
        <div className="repayment-section-table-titles"></div>
      </div>
    </div>
  );
};
export default RepaymentTable;
