import styled from "styled-components";

export const MainHeader = styled.main`
  width: 100%;
  height: 104px;
  position: sticky;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 5;
  background: ${(props) => props.theme["--base-background"]};

  @media (max-width: 480px) {
    height: 5rem;
  }

`;

export const SectionHeader = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 32px 160px;
  width: 100%;


  @media (max-width: 480px) {
    padding: 0.7rem;
  }

  @media (min-width: 768px){
    padding: 32px;
  }

  @media (min-width: 2560px){
    padding: 32px 600px;
  }
`;
export const LogoHeader = styled.figure`
  width: 84.952px;
  height: 40px;
`;

export const ArticleFigure = styled.article`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
`;

export const BaseFigure = styled.figure`
  padding: 0.5rem;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FigureLocale = styled(BaseFigure)`
  gap: 0.25rem;
  background: ${(props) => props.theme["--purple-light"]};

  p {
    color: ${(props) => props.theme["--purple-dark"]};
  }
`;

export const FigureCart = styled(BaseFigure)`
  background-color: ${(props) => props.theme["--yellow-light"]};
  position: relative;

  span {
    position: absolute;
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 50%;
    top: calc(-1.25rem / 2);
    right: calc(-1.25rem / 2);
    color: ${(props) => props.theme["--white"]};
    background: ${(props) => props.theme["--yellow-dark"]};

    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.75rem;
    font-weight: 700;
  }
`;
