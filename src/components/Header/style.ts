import styled from "@emotion/styled";
import { Container } from "@mui/system";
import { css } from "@emotion/react";

export const HeaderWrapper = styled.header`
  height: 93px;
  box-shadow: 0px 4px 16px rgba(1, 28, 64, 0.2);
`;

export const HeaderContainer = styled(Container)`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeaderNav = styled.nav`
  flex-grow: 1;
`;

export const HeaderLi = styled.li<{ active?: boolean }>`
  font-size: 25px;
  margin: 0 30px;
  ${({ active }) =>
    active
      ? css`
          font-family: "Open Sans";
          font-weight: 700;
          border-bottom: 3px solid #212121;
        `
      : css`
          font-family: "Karla";
          font-weight: 400;
        `}
`;

export const HeaderUl = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: flex-end;
`;
