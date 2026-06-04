import DataTable from "../UI/DataTable";

const columns = [
  { label: "Loan Name", key: "loanName" },
  { label: "Loan Code", key: "loanCode" },
  { label: "Category", key: "category" },
  { label: "Type", key: "type" },
  { label: "Interest Rate", key: "interestRate" },
  { label: "Tenure", key: "tenure" },
  { label: "Amount Range", key: "amountRange" },
  { label: "Status", key: "status" },
];

export const loanData = [
  {
    loanName: "Personal Loan",
    loanCode: "PL001",
    category: "Personal",
    type: "Unsecured",
    interestRate: "12.00%",
    tenure: "12 - 60 Months",
    amountRange: "₹50,000 - ₹20,00,000",
    status: "Active",
  },
  {
    loanName: "Home Loan",
    loanCode: "HL001",
    category: "Home",
    type: "Secured",
    interestRate: "8.50%",
    tenure: "5 - 30 Years",
    amountRange: "₹5,00,000 - ₹5,00,00,000",
    status: "Active",
  },
  {
    loanName: "Car Loan",
    loanCode: "CL001",
    category: "Vehicle",
    type: "Secured",
    interestRate: "9.20%",
    tenure: "1 - 7 Years",
    amountRange: "₹1,00,000 - ₹20,00,000",
    status: "Draft",
  },
  {
    loanName: "Business Loan",
    loanCode: "BL001",
    category: "Business",
    type: "Unsecured",
    interestRate: "13.50%",
    tenure: "12 - 60 Months",
    amountRange: "₹2,00,000 - ₹50,00,000",
    status: "Active",
  },
  {
    loanName: "Education Loan",
    loanCode: "EL001",
    category: "Education",
    type: "Secured",
    interestRate: "8.90%",
    tenure: "5 - 15 Years",
    amountRange: "₹50,000 - ₹30,00,000",
    status: "Disabled",
  },
];
const LoanTable = () => {
  return (
    <>
      <DataTable
        showSearch={true}
        columns={columns}
        data={loanData}
        searchPosition="left"
        filters={[
          {
            filters: [
              "Category",
              "Personal",
              "Home",
              "Vehicle",
              "Business",
              "Education",
            ],
            size: "medium",
            theme: "dark",
          },
          {
            filters: ["Status", "Active", "Draft", "Disabled"],
            size: "medium",
            theme: "dark",
          },
          {
            filters: ["Interest Type", "Fixed", "Floating", "Reducing"],
            size: "medium",
            theme: "dark",
          },
        ]}
      />
    </>
  );
};
export default LoanTable;
