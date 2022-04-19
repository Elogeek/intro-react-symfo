import styled from "styled-components";
import {ThemeContextProvider} from "../context/ThemeContext";
import {useContext} from "react";

export const ThemeChooser = function () {

    const {mode, toggleMode} = useContext(ThemeContextProvider);

    return (
        <ButtonContainer>
            <button onClick={toggleMode}>
                Mode {mode === "light" ? "dark" : "light"}
            </button>
        </ButtonContainer>
    );
};

// Design
const ButtonContainer = styled.div `
    padding-left: 20px;
    padding-right: 20px;
    display: flex;
    justify-content: flex-end;
    flex-grow: 1;

  & > button {
    border: none;
    background-color: #5eb5e0;
    padding: 8px;
    border-radius: 10px;
    color: white;

    &:hover {
      background-color: #4e95b9;
    }
  }
`;
