import styled from "@emotion/styled";
import { Button } from "@mui/material";

export const HomeTitle = styled.h1`
  font-family: "Inter";
  font-weight: 800;
  font-size: 54px;
  margin: 0;
`;

export const HomeTitleWrapper = styled.div`
  max-width: 454px;
  position: relative;
  margin-top: 105px;
`;

export const HomeRectangle = styled.div`
  background-color: #ffda55;
  width: 284px;
  height: 26px;
  position: absolute;
  left: 137px;
  top: 97px;
  z-index: -1;
`;

export const HomeSubtitle = styled.div`
  font-family: "Inter";
  font-weight: 400;
  font-size: 16px;
  max-width: 438px;
  line-height: 36px;
  letter-spacing: 0.02em;
  margin-top: 18px;
`;

export const HomeButton = styled(Button)`
  background-color: #48d0b0;
  box-shadow: 0px 2px 0px rgba(0, 0, 0, 0.18);
  border-radius: 11px;
  padding: 18px 26px;
  font-family: "Inter";
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: white;
  margin-top: 43px;
  text-transform: none;

  &:hover {
    background-color: #8dd9c7;
  }
`;
