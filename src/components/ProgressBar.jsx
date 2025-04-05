import { THRESHOLD } from "../constants";

function ProgressBar({ subtotal }) {
  const percent = Math.min((subtotal / THRESHOLD) * 100, 100);
  const remaining = Math.max(THRESHOLD - subtotal, 0);

  return (
    <div>
  <p>
    {remaining > 0
      ? `Add ₹${remaining} more to get a FREE Wireless Mouse!`
      : `🎁 You’ve unlocked the free gift!`}
  </p>
  <div className="progress-bar-container">
    <div className="progress-bar-fill" style={{ width: `${percent}%` }} />
  </div>
</div>

  );
}

export default ProgressBar;
