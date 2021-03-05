import styled from "styled-components";
export function ThirdTip() {
  return (
    <ThirdTipContainer>
      <p>
        Customizable tooltip <span>description</span>. Make your text bold,
        italic or underline.
      </p>
      <footer>
        <small>Don’t show any tips</small>
        <button>Next</button>
      </footer>
    </ThirdTipContainer>
  );
}

const ThirdTipContainer = styled.div`
  position: relative;
  top: 250px;
  left: -100px;

  width: 453px;
  height: 186px;
  background-color: white;

  box-sizing: border-box;
  border-radius: 7px;
  margin: 0 auto;
  box-shadow: 2px 2px 15px var(--gray);
  padding: 25px 28px;

  p {
    color: var(--blue);
    font-size: 20px;
    line-height: 33px;
  }

  p span {
    background-color: var(--purple);
  }

  footer {
    display: flex;
    justify-content: space-between;
  }

  footer small {
    font-size: 16px;
    color: #bababc;
  }

  footer button {
    background-color: var(--yellow);
    border: none;
    border-radius: 14px;
    color: white;
    padding: 11px 20px;
  }
  ::after {
    content: "";
    position: absolute;
    height: 25px;
    width: 25px;
    background-color: white;
    top: 171px;
    right: 365px;
    transform: rotate(45deg);
  }
`;
