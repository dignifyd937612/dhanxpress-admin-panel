export default function ActivityItem() {
  return (
    <div className="activity-item">
      <div className="activity-dot"></div>

      <div>
        <h4>Elenor Pena tagged you in a comment.</h4>

        <p>Today 12:00 PM</p>

        <div className="status-row">
          <span className="badge yellow">New</span>
          <span className="arrow">→</span>
          <span className="badge green">In Progress</span>
        </div>
      </div>
    </div>
  );
}
