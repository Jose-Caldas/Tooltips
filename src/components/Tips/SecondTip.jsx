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
  margin-top: 20px;

  span {
    padding: 20px;
    background-color: var(--blue);
    color: white;
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
`;
