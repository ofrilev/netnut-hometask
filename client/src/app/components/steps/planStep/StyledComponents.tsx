"use client";

import { theme } from "@/app/theme";
import styled from "styled-components";

export const ItemsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  @media screen and (max-width: ${theme.layout.medium}) {
    margin-block: 10px;
    flex-direction: column;
    align-items: center;
  }
  gap: 15px;
`;
export const StyledItem = styled.div<{ ischose: boolean }>`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 15px;
  height: 150px;
  width: 130px;
  @media screen and (max-width: ${theme.layout.medium}) {
    flex-direction: row;
    align-items: center;
    gap: 20px;
    min-height: 40px;
    height: fit-content;
    max-height: 60px;
    width: 230px;
  }
  border: 2px solid ${theme.colors.neutral.lightGray};
  border-radius: 10px;
  box-shadow: 10px 10px 5px ${theme.colors.neutral.magnolia};
  &:hover {
    border-color: ${(props) => !props.ischose && theme.colors.neutral.coolGray};
  }
  border-color: ${(props) =>
    props.ischose && theme.colors.primary.purplishBlue};
  & > img {
    margin-bottom: 50px;
    height: 40px;
    @media screen and (max-width: ${theme.layout.medium}) {
      height: 30px;
      margin-bottom: unset;
    }
  }
  .plan-details {
    display: flex;
    flex-direction: column;
    gap: 5px;
    .planName {
      color: ${theme.colors.primary.marineBlue};
      font-size: 17px;
      font-weight: ${theme.typography.fontWeights.bold};
      @media screen and (max-width: ${theme.layout.mobile}) {
        font-size: ${theme.typography.fontSize};
        font-weight: ${theme.typography.fontWeights.regular};
      }
    }
    .planPrice {
      color: ${theme.colors.neutral.lightGray};
      font-size: 14px;
      font-weight: ${theme.typography.fontWeights.regular};
    }
    .planData {
      color: ${theme.colors.primary.marineBlue};
      font-size: 14px;
      font-weight: ${theme.typography.fontWeights.regular};
    }
  }
`;
export const StyledToggle = styled.div`
  width: 100%;
  height: 50px;
  gap: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background-color: ${theme.colors.neutral.alabaster};
  @media screen and (max-width: ${theme.layout.mobile}) {
    margin-top: 20px;
  }
  .duration {
    color: ${theme.colors.neutral.lightGray};
    font-weight: ${theme.typography.fontWeights.regular};
    &.-selectd {
      color: ${theme.colors.primary.marineBlue};
      font-weight: ${theme.typography.fontWeights.bold};
    }
  }
`;
export const ToggleBarWrapper = styled.div<{ istoggled: boolean }>`
  width: 50px;
  height: 20px;
  background-color: ${theme.colors.primary.marineBlue};
  border-radius: 12px;
  position: relative;
  cursor: pointer;
  transition: background-color 0.3s ease;
`;
export const ToggleCircle = styled.div<{ istoggled: boolean }>`
  width: 15px;
  height: 15px;
  background-color: ${theme.colors.neutral.white};
  border-radius: 50%;
  position: absolute;
  top: 2px;
  left: ${(props) => (props.istoggled ? "5px" : "30px")};
  transition: left 0.3s ease;
`;
