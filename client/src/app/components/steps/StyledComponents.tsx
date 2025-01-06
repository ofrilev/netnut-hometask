import { theme } from "@/app/theme";
import styled from "styled-components";

export const FieldsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
export const StyledInputWrapper = styled.div<{ isErr: boolean }>`
  display: flex;
  flex-direction: column;
  background-color: ${theme.colors.neutral.white};
  & > div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    & > div:first-child {
      color: ${theme.colors.primary.marineBlue};
      display: block;
      height: 33px;
      font-size: 15px;
      font-weight: ${theme.typography.fontWeights.regular};
      line-height: 33.24px;
      text-align: left;
    }
  }

  & > input {
    width: 382px;
    @media screen and (max-width: ${theme.layout.medium}) {
      width: 100%;
    }
    color: ${theme.colors.primary.marineBlue};
    height: 22px;
    padding: 10px;
    border-radius: 10px;
    border: 1px solid ${theme.colors.neutral.lightGray};
    @media screen and (max-width: ${theme.layout.mobile}) {
      width: 90%;
    }
    &:hover {
      &:focus {
        cursor: text;
      }
      cursor: pointer;
      border-color: ${theme.colors.primary.pastelBlue};
    }
  }
  border-color: ${(props) => props.isErr && theme.colors.primary.strawberryRed};
`;
export const ErrorField = styled.div<{ isErr: boolean }>`
  display: ${(props) => (props.isErr ? `block` : `none`)};
  color: ${theme.colors.primary.strawberryRed};
  text-wrap: nowrap;
  font-size: 12px;
  font-weight: ${theme.typography.fontWeights.medium};
  align-self: end;
`;
