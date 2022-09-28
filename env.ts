export const MODE = process.env.NEXT_PUBLIC_MODE || "DEV";
export function withMode(dev: any, prod: any): number | string {
	if (MODE === "DEV") {
		return dev;
	}
	return prod;
}

// env file
export const env = {
	MODE: MODE,
    MAINTAINANCE: process.env.NEXT_PUBLIC_MAINTAINANCE || false,
	SERVER_URL: process.env.SERVER_URL,
	APP: "",
	APP_WITH_DOMAIN: "",
	COMPANY: "",
	URL: withMode("http://localhost:3000", ""),
};
