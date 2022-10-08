import "../styles/globals.css";
import type { AppProps } from "next/app";
import { MantineProvider } from "@mantine/core";
import HeaderMenuColored from "../components/header";
import { SessionProvider, SessionProviderProps } from "next-auth/react";

const LINKS = [
  {
    label: "Home",
    link: "/",
  },
  {
    label: "Contact Us",
    link: "/contactus",
  },
  {
    label: "About",
    link: "/aboutus",
  },
];

function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps<SessionProviderProps>) {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        /** Put your mantine theme override here */
        colorScheme: "light",
      }}>
      <SessionProvider>
        <HeaderMenuColored links={LINKS} />
        <Component {...pageProps} />
      </SessionProvider>
    </MantineProvider>
  );
}

export default MyApp;
