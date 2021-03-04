import "../styles/Container.css";
import FirstTips from "./Tips/FirstTip";
import { SecondTip } from "./Tips/SecondTip";
import { ThirdTip } from "./Tips/ThirdTip";

export default function Container() {
  return (
    <div>
      <div className="container"></div>

      <FirstTips />
      <SecondTip />
      <ThirdTip />
      <div className="circle">
        <div className="minCircle"></div>
      </div>
    </div>
  );
}
