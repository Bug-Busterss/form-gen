import "../styles/globals.css";
import type { AppProps } from "next/app";
import { MantineProvider } from "@mantine/core";
import HeaderMegaMenu from "../components/header";
import HeaderMenuColored from "../components/header";

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

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        /** Put your mantine theme override here */
        colorScheme: "light",
      }}>
      <HeaderMenuColored links={LINKS} />
      <Component {...pageProps} />
    </MantineProvider>
  );
}

export default MyApp;
