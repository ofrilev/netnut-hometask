"use client";
import { ThemeProvider } from "styled-components";
import { theme } from "../theme";
import GlobalStyles from "../GlobalStyles";
import { StepContextProvider } from "../components/stepContext/stepsContext";
// import "../";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <StepContextProvider>
        <ThemeProvider theme={theme}>
          <body>{children}</body>
          <GlobalStyles />
        </ThemeProvider>
      </StepContextProvider>
    </html>
  );
}
