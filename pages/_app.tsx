import type { AppProps } from "next/app";
import MainComponent from "../components/MainComponent";
import "../styles/main.scss";

function MyApp({ Component, pageProps }: AppProps) {
	return <MainComponent Component={Component} props={pageProps} />
}

export default MyApp;
