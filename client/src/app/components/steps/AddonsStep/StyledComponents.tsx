"use client";
import { theme } from "@/app/theme";
import styled from "styled-components";

export const ItemsWrapper = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
export const StyledItem = styled.div<{ ischose: boolean }>`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
justify-content:space-between;
  padding: 15px;
  height: 50px;
  width: inherit;
  border: 2px solid ${theme.colors.neutral.lightGray};
  border-radius: 10px;
  box-shadow: 10px 10px 5px ${theme.colors.neutral.magnolia};
  &:hover {
    border-color: ${(props) => !props.ischose && theme.colors.neutral.coolGray};
  }
  border-color: ${(props) =>
    props.ischose && theme.colors.primary.purplishBlue};
  .leftSection {
    display: flex;
    gap: 20px;
    .title-subtitle {
      display: flex;
      flex-direction: column;
      white-space: nowrap;
      .addonName {
        color: ${theme.colors.primary.marineBlue};
        font-size: 14px;
        font-weight: ${theme.typography.fontWeights.bold};
      }
      .addonData {
        color: ${theme.colors.neutral.lightGray};
        font-size: ${theme.typography.fontSize};
        font-weight: ${theme.typography.fontWeights.regular};
      }
    }
  }
  .addonPrice {
    color: ${theme.colors.primary.purplishBlue};
    font-weight: ${theme.typography.fontWeights.medium};
  }
`;
