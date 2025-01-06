"use client";
import { theme } from "@/app/theme";
import styled from "styled-components";

export const StepWrapper = styled.div<{ isMobile: boolean }>`
  display: flex;
  flex-direction: ${(props) => (props.isMobile ? "column" : "unset")};
  align-self: center;
  width: ${(props) => (props.isMobile ? "80%" : "848px")};
  min-height: ${(props) => (props.isMobile ? "unset" : "568px")};
  height: ${(props) => (props.isMobile ? "60%" : "auto")};
  padding: 20px;
  background-color: ${theme.colors.neutral.white};
  border: 1px solid transparent;
  border-radius: 20px;
  box-shadow: "10px";
  position: relative;
  bottom: ${(props) => (props.isMobile ? "75px" : "unset")};
  .titleWrapper {
    display: flex;
    flex-direction: column;
    align-self: flex-start;
    gap: 10px;
    @media screen and (max-width: ${theme.layout.mobile}) {
      margin-bottom: 10px;
    }
  }
  .StepTitle {
    color: ${theme.colors.primary.marineBlue};
    font-weight: ${theme.typography.fontWeights.bold};
    font-size: 36px;
    @media screen and (max-width: ${theme.layout.mobile}) {
      font-size: 25px;
    }
  }
  .StepSubTitle {
    color: ${theme.colors.neutral.lightGray};
    font-size: 15px;
    font-weight: ${theme.typography.fontWeights.medium};
  }
`;
export const DesktopWrapper = styled.div`
  width: 522px;
  margin-top: 30px;
  margin-left: 50px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  .uppersection {
    width: 90%;
    display: flex;
    flex-direction: column;
    gap: 40px;
  }
`;
