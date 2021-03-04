import "../styles/Container.css";
import FirstTips from "./Tips/FirstTip";
import { SecondTip } from "./Tips/SecondTip";
import { ThirdTip } from "./Tips/ThirdTip";
import styled from "styled-components";

export default function Container() {
  return (
    <div>
      <Wrapper>
        <FirstTips />
        <SecondTip />
        <ThirdTip />
        <Circle>
          <div className="minCircle"></div>
        </Circle>
      </Wrapper>
    </div>
  );
}

const Circle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 47px;
  height: 47px;
  border-radius: 50%;
  border: 1px solid var(--purple);
`;

const Wrapper = styled.div`
  width: 730.18px;
  height: 739px;
  background: linear-gradient(128.16deg, #f0f4fd 2.37%, #ecf2ff 88.76%);
  border-radius: 50%;

  .minCircle {
    width: 20px;
    height: 20px;
    background-color: var(--purple);
    border-radius: 50%;
  }

  margin: 60px auto;
`;
