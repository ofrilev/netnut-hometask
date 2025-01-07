"use client";
import styled from "styled-components";
import bgSidebarDesktop from "@/assets/svgs/bg-sidebar-desktop.svg";
import bgSidebarMobile from "@/assets/svgs/bg-sidebar-mobile.svg";
import { theme } from "@/theme";

export const StepFrame = styled.div<{ ismobile: boolean }>`
  width: ${(props) => (props.ismobile ? `100%` : `273px`)};
  height: ${(props) => (props.ismobile ? `172px` : `568px`)};
  background-image: ${(props) =>
    props.ismobile ? `url(${bgSidebarMobile})` : `url(${bgSidebarDesktop})`};
  overflow-y: ${(props) => (props.ismobile ? `hidden` : `unset`)};
  border-radius: 10px;
`;
export const ItemsWrapper = styled.div<{ ismobile: boolean }>`
  display: flex;
  flex-direction: ${(props) => (props.ismobile ? `row` : `column`)};
  justify-content: center;
  gap: 25px;
  height: 50%;
`;
export const StepItem = styled.div<{ chosen: boolean; ismobile: boolean }>`
  display: flex;
  flex-direction: row;
  align-self: center;
  color: ${theme.colors.neutral.coolGray};
  width: ${(props) => (props.ismobile ? `unset` : `75%`)};
  gap: ${(props) => (props.ismobile ? `unset` : `20px`)};
  .stepNumber {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    border: 1px solid
      ${(props) =>
        props.chosen ? `transparent` : `${theme.colors.primary.lightBlue}`};
    border-radius: 100px;
    color: ${(props) =>
      props.chosen
        ? theme.colors.primary.marineBlue
        : theme.colors.primary.lightBlue};
    background-color: ${(props) =>
      props.chosen ? theme.colors.primary.lightBlue : `transparent`};
  }
  .rightSide {
    display: ${(props) => (props.ismobile ? `none` : `flex`)};
    flex-direction: column;
    justify-content: space-between;
    .stepTitle {
      font-size: 12px;
      font-size: ${theme.typography.fontWeights.regular};
    }
    .stepSubtitle {
      font-size: ${theme.typography.fontWeights.bold};
      color: ${theme.colors.neutral.white};
    }
  }
`;
