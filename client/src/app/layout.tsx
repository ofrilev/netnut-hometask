"use client";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import GlobalStyles from "./GlobalStyles";
import { GlobalFonts } from "./assets/fontsUtils";
import { StepContextProvider } from "./components/stepContext/stepsContext";

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
          <GlobalFonts />
          <GlobalStyles />
        </ThemeProvider>
      </StepContextProvider>
    </html>
  );
}
