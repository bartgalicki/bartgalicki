// styles
import "../styles/reset.css";
import "../styles/variables.css";
import "../styles/globals.css";
// types
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
