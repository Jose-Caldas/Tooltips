import { FaCheck } from "react-icons/fa";
import { RiCloseLine } from "react-icons/ri";
import "../../styles/FirstTip.css";

export default function Tips() {
  return (
    <div className="contentTips">
      <span>
        <p>Paste or type a link</p>
      </span>
      <span>
        <FaCheck />
      </span>
      <span>
        <RiCloseLine />
      </span>
    </div>
  );
}
