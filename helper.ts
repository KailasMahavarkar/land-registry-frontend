import { useEffect } from "react";
import { env } from "./env";
import customToast from "./toast";

export const url = (endpoint: string) => {
	return `${env.SERVER_URL}${endpoint}`;
};

export const handleNetworkError = (error: any) => {
	let hasError = false;
	if (!window.navigator.onLine) {
		// internet is not working
		hasError = true;
		return customToast({
			message: "Internet connection is not available",
			icon: "error",
		});
	} else if (isNetworkError(error)) {
		hasError = true;
		return customToast({
			message: "Server is not available",
			icon: "error",
		});
	}
	return hasError;
};

export const isEmpty = (arg: any) => {
	if (arg == null) {
		return true;
	} else if (typeof arg === "undefined") {
		return true;
	} else if (arg.length === 0) {
		return true;
	} else if (typeof arg === "object" && Object.keys(arg).length === 0) {
		return true;
	}
	return false;
};

export function useEffectAsync(effect: any, inputs: any) {
	useEffect(() => {
		effect();
	}, inputs);
}

export const any = (iterable: any) => {
	for (const e of iterable) {
		if (e) return true;
	}
	return false;
};

export const all = (iterable: any) => {
	for (const e of iterable) {
		if (!e) return false;
	}
	return true;
};

export const anyEmpty = (iterable: any) => {
	for (const e of iterable) {
		if (isEmpty(e)) return true;
	}
	return false;
};

export const allEmpty = (iterable: any) => {
	for (const e of iterable) {
		if (!isEmpty(e)) return false;
	}
	return true;
};

// round number to 2 decimal places
export const roundDecimal = (number: number) => {
	return Math.round(number * 100) / 100;
};

export const replaceWithIndex = (array: any, index: number, element: any) => {
	array.splice(index, 1, element);
	return array;
};

export const xrange = (start = 0, stop = 5, step = 1) => {
	let array = [];
	let i = start;
	while (i <= stop) {
		array.push(i);
		i += step;
	}
	return array;
};

export const xiter = (stop = 10) => {
	let array = [];
	let i = 1;
	while (i <= stop) {
		array.push(i);
		i += 1;
	}
	return array;
};

export const randomHash = (length = 24, capitals = false) => {
	let characters =
		"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz+/";
	let result = "";
	var charactersLength = characters.length;
	for (var i = 0; i < length; i++) {
		result += characters.charAt(
			Math.floor(Math.random() * charactersLength)
		);
	}
	return result;
};

export function parseJwt(token: string) {
	try {
		const base64Payload = token.split(".")[1];
		const payload = Buffer.from(base64Payload, "base64");
		return JSON.parse(payload.toString());
	} catch (error) {
		console.log("token does not exists");
	}
}

// const HEADER_PAYLOAD = {
//     "content-type": "application/json",
//     Authorization: `Bearer ${localStorage.getItem('accessToken')}`
// }

export const onMobile = (width: number) => {
	return width < 768;
};

export function isNetworkError(err: any) {
	return !!err.isAxiosError && !err.response;
}

export const copyHandler = (tag: string, service: "files" | "paste") => {
	let rPath = "";
	if (service === "files") {
		rPath = `${env.URL}/f/${tag}`;
	} else if (service === "paste") {
		rPath = `${env.URL}/r/${tag}`;
	}
	if (typeof navigator.clipboard == "undefined") {
		console.log("navigator.clipboard");
		var textArea = document.createElement("textarea");
		textArea.value = rPath;
		textArea.style.position = "fixed"; //avoid scrolling to bottom
		document.body.appendChild(textArea);
		textArea.focus();
		textArea.select();

		try {
			var successful = document.execCommand("copy");
			var msg = successful ? "successful" : "unsuccessful";
			console.log("Copying text command was " + msg);
		} catch (err) {
			console.log("Oops, unable to copy");
		}
		document.body.removeChild(textArea);
	} else {
		navigator.clipboard?.writeText(rPath);
	}
	return rPath;
};

export const copyHandlerRaw = (text: string) => {
	if (typeof navigator.clipboard == "undefined") {
		console.log("navigator.clipboard");
		var textArea = document.createElement("textarea");
		textArea.value = text;
		textArea.style.position = "fixed"; //avoid scrolling to bottom
		document.body.appendChild(textArea);
		textArea.focus();
		textArea.select();

		try {
			var successful = document.execCommand("copy");
			var msg = successful ? "successful" : "unsuccessful";
			console.log("Copying text command was " + msg);
		} catch (err) {
			console.log("Oops, unable to copy");
		}
		document.body.removeChild(textArea);
	} else {
		navigator.clipboard?.writeText(text);
	}
};

export function base64Checker(word: string) {
	const base64 =
		"0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
	let checker = true;

	for (let i = 0; i < word.length; i++) {
		if (base64.indexOf(word[i]) === -1) {
			checker = false;
		}
	}

	return checker;
}

export const setAuthed = () => {
	window.localStorage.setItem("isAuthed", "true");
};

export const getAuthed = () => {
	return window.localStorage.getItem("isAuthed")?.toString();
};

export const clearAuth = () => {
	window.localStorage.removeItem("isAuthed");
};

export const isAuthed = () => {
	let authed = true;

	const localToken = localStorage.getItem("refreshToken")?.toString();
	const timeNowInSeconds = Math.floor(Date.now() / 1000);

	if (localToken) {
		try {
			const token = parseJwt(localToken);
			if (timeNowInSeconds > token.exp) {
				authed = false;
			}
		} catch (error) {
			authed = false;
		}
	} else {
		authed = false;
	}
	localStorage.setItem("isAuthed", JSON.stringify(authed));

	return authed;
};
