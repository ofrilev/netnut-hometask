"use client"
import { theme } from "@/app/theme";
import styled from "styled-components";
export const NavBarButton = styled.button<{disabled?: boolean,isSummaryStep?:boolean}>`
display: ${(props)=>(props.disabled ? "none": "block")};
width: 100px;
height: 40px;
border-radius: 7px;
font-weight: ${theme.typography.fontWeights.regular};
border-color: transparent ;
transition: background-color 0.3s;
&:hover{
  opacity: 0.5;
  cursor: pointer;
}
&.next{
  margin-left: auto;
  background-color: ${(props => props.isSummaryStep ? theme.colors.primary.purplishBlue :theme.colors.primary.marineBlue)};
  color: ${theme.colors.neutral.white};
  @media screen and (max-width: ${theme.layout.mobile}) {
      margin-right: 20px;
  }
}
&.back{
  color: ${theme.colors.neutral.coolGray};
  background: transparent;
}
`
export const ButtonsWrapper = styled.div<{isMobile: boolean}>`
  display: flex;
  width: 100%;
  flex-direction: row;
  background-color: ${(props)=>(props.isMobile ? `white`: `unset`)};
  margin-top: ${(props)=>(props.isMobile && `auto`)};
`