import { FaCheck } from "react-icons/fa";
import { RiCloseLine } from "react-icons/ri";
import "../../styles/FirstTip.css";

export default function FirstTip() {
  return (
    <div className="firstTipContainer">
      <span>
        <strong>Paste or type a link</strong>
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
