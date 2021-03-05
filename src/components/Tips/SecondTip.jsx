import { FiBold, FiItalic, FiLink, FiUnderline } from "react-icons/fi";
import styled from "styled-components";

export function SecondTip() {
  return (
    <SecondTipContainer>
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
    </SecondTipContainer>
  );
}

const SecondTipContainer = styled.div`
  /* margin-top: 20px; */
  position: relative;
  top: 248px;
  right: -191px;
  z-index: 1;

  span {
    padding: 20px;
    background-color: var(--blue);
    color: white;
    box-shadow: 3px 3px 15px var(--dark-blue);
  }

  span:nth-child(1) {
    border-radius: 7px 0 0 7px;
  }

  span:nth-child(2) {
    background-color: var(--dark-blue);
  }

  span:nth-child(4) {
    border-radius: 0 7px 7px 0;
  }
  ::after {
    content: "";
    position: absolute;
    height: 25px;
    width: 25px;
    background-color: var(--blue);
    top: 26px;
    right: 605px;
    transform: rotate(45deg);
    z-index: 1;
    box-shadow: 2px 2px 10px var(--dark-blue);
  }
`;
