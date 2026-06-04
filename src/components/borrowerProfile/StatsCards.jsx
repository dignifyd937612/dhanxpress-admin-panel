export default function StatsCards() {
  return (
    <div className="stats-wrapper">
      <div className="stat-card">
        <p>Docs Owed</p>
        <h2>5</h2>
      </div>

      <div className="stat-card">
        <p>Docs Pending Review</p>
        <h2>4</h2>
      </div>

      <div className="stat-card">
        <p>Docs Accepted</p>
        <h2>
          12<span>/13</span>
        </h2>
      </div>

      <button className="upload-btn">Upload Document</button>
    </div>
  );
}
