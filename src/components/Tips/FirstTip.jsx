import { FaCheck } from "react-icons/fa";
import { RiCloseLine } from "react-icons/ri";
import styled from "styled-components";
import "../../styles/Global.css";

export default function FirstTip() {
  return (
    <FirstTipContainer className="firstTipContainer">
      <h2>
        <strong>Paste or type a link</strong>
      </h2>
      <span className="active">
        <FaCheck />
      </span>
      <small>
        <RiCloseLine />
      </small>
    </FirstTipContainer>
  );
}

const FirstTipContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 150px;
  background-color: var(--blue);
  border-radius: 7px;
  width: 410px;
  height: 60px;

  h2 {
    width: 60%;
    margin: none;
    font-size: 15px;
    color: var(--gray);
    position: relative;
    text-align: center;
  }

  h2::after {
    content: "";
    position: absolute;
    height: 25px;
    width: 25px;
    background-color: var(--blue);
    top: 26px;
    right: 178px;
    transform: rotate(45deg);
  }

  .active {
    display: flex;
    padding: 0 30px;
    color: white;
    background-color: var(--dark-blue);
    height: 60px;
    align-items: center;
    justify-content: center;
    width: 20%;
  }
  small {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20%;
    color: #fff;
  }
  small svg {
    width: 30px;
    height: 30px;
  }
`;
