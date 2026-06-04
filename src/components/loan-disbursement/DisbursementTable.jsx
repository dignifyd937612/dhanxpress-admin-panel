import DataTable from "../UI/DataTable";

export default function DisbursementTable() {
  return (
    <DataTable
      tableHeading="Disbursement Table"
      showSearch={false}
      showFilters={false}
      showPagination={false}
    />
  );
}
