import styled from "styled-components";
import { CgRadioChecked } from "react-icons/cg";
import { useEffect, useState } from "react";
import { FiBold, FiItalic, FiLink, FiUnderline } from "react-icons/fi";

export function ThirdTip() {
  const [isvisible, setIsVisible] = useState(false);

  // const selectedText = window.getSelection().toString();

  useEffect(() => {
    document.addEventListener("mouseup", (event) => {
      console.log(event);
      let newElement = document.createElement("p");
      newElement.textContent = "bananas";
      newElement.setAttribute("id", "banana");
      let span = document.querySelector("span");

      if (window.getSelection().toString().length) {
        // let exactText = window.getSelection().toString();
        // var x = document.activeElement.tagName;

        return span.appendChild(newElement);
      }
      const oldElement = document.getElementById("banana");

      if (oldElement && oldElement.parentNode) {
        span.removeChild(oldElement);
      }
    });
  }, []);

  return (
    <Wrapper>
      <button className="btn" onMouseEnter={() => setIsVisible(true)}>
        <CgRadioChecked />
      </button>
      {isvisible ? (
        <ThirdTipContainer>
          <SecondTipContainer>
            <div>
              <button>
                <FiBold />
              </button>
            </div>
            <div>
              <button>
                <FiItalic />
              </button>
            </div>
            <div>
              <button>
                <FiUnderline />
              </button>
            </div>
            <div>
              <FiLink />
            </div>
          </SecondTipContainer>
          <p>
            Customizable tooltip <span>description</span>. Make your text bold,
            italic or underline.
          </p>

          <footer>
            <small>Don’t show any tips</small>
            <button>Next</button>
            <button onClick={() => setIsVisible(false)}>Close</button>
          </footer>
        </ThirdTipContainer>
      ) : null}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .btn {
    border: none;
    position: absolute;
    top: 472px;
    background: none;
    left: 275px;
  }
  svg {
    width: 50px;
    height: 50px;
    color: var(--purple);
  }
  .btn:hover {
    opacity: 0.8;
  }
`;

const ThirdTipContainer = styled.div`
  position: absolute;
  top: 268px;
  left: 225px;

  width: 453px;
  height: 186px;
  background-color: white;

  box-sizing: border-box;
  border-radius: 7px;
  margin: 0 auto;
  box-shadow: 2px 2px 15px var(--gray);
  padding: 25px 28px;

  button {
    background: none;
    border: none;
  }

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
    outline: none;
    cursor: pointer;
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

const SecondTipContainer = styled.div`
  display: flex;
  position: absolute;
  top: -34px;
  left: 186px;

  div {
    display: flex;
    padding: 10px;

    background-color: var(--blue);
    color: white;
    box-shadow: 3px 3px 15px var(--dark-blue);

    svg {
      color: white;
      width: 20px;
      height: 20px;
    }
  }

  div:nth-child(1) {
    border-radius: 7px 0 0 7px;
  }

  div:nth-child(2) {
    background-color: var(--dark-blue);
  }

  div:nth-child(4) {
    border-radius: 0 7px 7px 0;
  }
  ::after {
    content: "";
    position: absolute;
    height: 20px;
    width: 20px;
    background-color: var(--blue);
    top: 30px;
    right: 71px;
    transform: rotate(45deg);
    z-index: 1;
    box-shadow: 2px 2px 10px var(--dark-blue);
  }
`;
