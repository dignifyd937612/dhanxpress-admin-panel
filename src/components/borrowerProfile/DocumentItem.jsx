import { FileText, Check, X, MoreVertical } from "lucide-react";

export default function DocumentItem() {
  return (
    <div className="document-item">
      <div className="doc-left">
        <div className="doc-icon">
          <FileText size={18} />
        </div>

        <div>
          <h4>Copies for voter issued identification</h4>

          <p>Voter.png 12MB 02,Jan,2025</p>
        </div>
      </div>

      <div className="doc-actions">
        <button>
          <Check size={16} />
        </button>

        <button>
          <X size={16} />
        </button>

        <button className="more-btn">
          <MoreVertical size={16} />
        </button>
      </div>
    </div>
  );
}
