"use client";
import { theme } from "@/theme";
import styled from "styled-components";

export const SelectionsWrapper = styled.div`
  display: flex;
  width: 400px;
  @media screen and (max-width: ${theme.layout.medium}) {
    width: 95%;
  }
  flex-direction: column;
  gap: 30px;
  .grey {
    border-radius: 10px;
    padding: 15px;
    display: flex;
    flex-direction: column;
    gap: 30px;
    background-color: ${theme.colors.neutral.magnolia};
    .border {
      border: none;
      border-top: 1px solid gray;
      margin: 20px 0;
      width: 100%; /* or any specific width */
    }
  }
  .total-number {
    color: ${theme.colors.primary.purplishBlue};
    font-weight: ${theme.typography.fontWeights.bold};
    font-size: 16px;
  }
`;
export const Item = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: ${theme.colors.neutral.coolGray};
  .plan {
    display: flex;
    flex-direction: column;
    color: ${theme.colors.primary.marineBlue};
    font-weight: ${theme.typography.fontWeights.bold};
    font-size: 16px;
    .-change {
      margin-top: 10px;
      font-size: ${theme.typography.fontSize};
      color: ${theme.colors.neutral.coolGray};
      font-weight: ${theme.typography.fontWeights.regular};
      cursor: pointer;
      text-decoration: underline;
      &:hover {
        opacity: 0.3;
      }
    }
  }
`;
