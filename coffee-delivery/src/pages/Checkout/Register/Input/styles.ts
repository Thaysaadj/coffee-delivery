import styled from "styled-components";

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  position: relative;

  > p {
    font-size: 12px;
    margin-left: 5px;
    color: ${(props) => props.theme["--base-error"]};
  }
`;

export const InputStyledContainer = styled.input`
  height: 2.625rem;
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme["--base-button"]};
  background-color: ${(props) => props.theme["--base-input"]};
  display: flex;
  transition: 0.4s;

  &:focus {
    border-color: ${(props) => props.theme["--yellow-dark"]};
  }

  color: ${(props) => props.theme["--base-text"]};
  font-size: 0.75rem;
  padding: 0 0.75rem;

  &::placeholder {
    color: ${(porps) => porps.theme["--base-label"]};
  }

  @media (max-width: 480px) {
    width: 200px;
  }

  @media (min-width: 768px) {
  }

  @media (min-width: 1024px) {
  }

  @media (min-width: 1200px) {
  }

  @media (min-width: 2560px) {
  }
`;
