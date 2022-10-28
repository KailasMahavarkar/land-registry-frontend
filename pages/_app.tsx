import type { AppProps } from "next/app";
import { useState } from "react";
import CustomContext, {
	defaultSingleLandValues,
} from "../components/context/custom.context";
import MainComponent from "../components/MainComponent";
import "../styles/main.scss";
import { LandTreeType, singleLandAttributeType } from "../types/type";

function MyApp({ Component, pageProps }: AppProps) {
	const [singleLand, setSingleLand] = useState<LandTreeType>(
		defaultSingleLandValues
	);

	const landUpdateHandler = (
		attribute: keyof singleLandAttributeType,
		value: any
	) => {
		setSingleLand({
			...singleLand,
			[attribute]: value,
		});
	};

	return (
		<CustomContext.Provider
			value={{
				singleLand: singleLand,
				setSingleLand: setSingleLand,
			}}
		>
			<MainComponent Component={Component} props={pageProps} />
		</CustomContext.Provider>
	);
}

export default MyApp;
