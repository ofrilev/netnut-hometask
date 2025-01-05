"use client";
import iconThankYou from "@/app/assets/svgs/icon-thank-you.svg";
import { theme } from "@/app/theme";
import styled from "styled-components";
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  .info {
    display: flex;
    justify-content: center;
    width: 100%;
    color: ${theme.colors.neutral.lightGray};
    font-size: 16px;
    .last-line {
      display: inline-block;
      text-indent: 2em;
    }
  }
`;

export const ThankYou = () => (
  <Wrapper>
    <img src={iconThankYou} alt="iconThankYou" height={"130px"}></img>
    <div className="StepTitle">Thank you!</div>
    <div className="info">
      Thanks for confirming your subscription! We hope you have fun using our
      platform. If you ever need support, please feel
      <div className="last-line">
        free to email us at support@loremgaming.com.
      </div>
    </div>
  </Wrapper>
);
