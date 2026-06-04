export default function DocumentActions() {
  return (
    <div className="document-actions">
      <div className="left-buttons">
        <button className="active">All Documents</button>
        <button>Portal Milestone</button>
      </div>

      <div className="right-buttons">
        <button>+ Add Template</button>
        <button>Download Zip</button>
        <button>Convert As PDF</button>
      </div>
    </div>
  );
}
