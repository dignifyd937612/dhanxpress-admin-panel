import DocumentItem from "./DocumentItem";

export default function DocumentList() {
  const docs = [1, 2, 3];

  return (
    <div className="document-list">
      {docs.map((item) => (
        <DocumentItem key={item} />
      ))}
    </div>
  );
}
