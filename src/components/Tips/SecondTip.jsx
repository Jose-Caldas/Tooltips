import "../../styles/SecondTip.css";
import { FiBold, FiItalic, FiLink, FiUnderline } from "react-icons/fi";

export function SecondTip() {
  return (
    <div className="secondTipContainer">
      <span>
        <FiBold />
      </span>
      <span>
        <FiItalic />
      </span>
      <span>
        <FiUnderline />
      </span>
      <span>
        <FiLink />
      </span>
    </div>
  );
}
