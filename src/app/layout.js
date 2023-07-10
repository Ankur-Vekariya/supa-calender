"use client";
import { useState } from "react";
import "./globals.scss";
import { Inter } from "next/font/google";
import { lightTheme, darkTheme } from "./theme/theme";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { adapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import Header from "./components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  const [isDark, setIsDark] = useState(false);
  const switchTheme = () => {
    setIsDark(!isDark);
  };
  return (
    <html lang="en">
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <LocalizationProvider dateAdapter={adapterDayjs}>
          <CssBaseline />
          <Header switchTheme={switchTheme} />
          <body className={inter.className}>{children}</body>
        </LocalizationProvider>
      </ThemeProvider>
    </html>
  );
}
