"use client";
import iconThankYou from "@/assets/svgs/icon-thank-you.svg";
import { theme } from "@/theme";
import Image from "next/image";
import styled from "styled-components";
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 30px;
  .thank-you-icon {
    height: 130px;
    @media screen and (max-width: ${theme.layout.medium}) {
      height: 80px;
    }
  }

  .description {
    color: ${theme.colors.neutral.lightGray};
    font-size: 18px;
    @media screen and (max-width: ${theme.layout.medium}) {
      font-size: 15px;
    }
    line-height: 1.8;
    margin: 0;
    line-height: 1.6;
  }

  .description a {
    color: ${theme.colors.neutral.coolGray};
    text-decoration: none;
  }
`;

export const ThankYou = () => (
  <Wrapper>
    <Image
      className="thank-you-icon "
      src={iconThankYou}
      alt="iconThankYou"
      width={"130"}
      height={"130"}
    />
    <div className="StepTitle">Thank you!</div>
    <p className="description">
      Thanks for confirming your subscription! We hope you have fun using our
      platform. If you ever need support, please feel free to email us at
      <a href="mailto:support@loremgaming.com"> support@loremgaming.com</a>.
    </p>
  </Wrapper>
);
