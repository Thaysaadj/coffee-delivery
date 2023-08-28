import styled from "styled-components";

export const MainHeader = styled.main`
  width: 100%;
  height: 104px;
`;

export const SectionHeader = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 32px 160px;

  @media (min-width: 320px) and (max-width: 425px) {
    padding: 0.625rem;
  }
  @media (min-width: 425px) and (max-width: 768px) {
    padding: 1.25rem;
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
`;
