import { useState } from "react";
import { handleNetworkError, useEffectAsync } from "../../helper";
import axios from "axios";
import customToast from "../../toast";
import FormInputElement from "../element/FormInputElement";
import FormNumberElement from "../element/FormNumberElement";


// state form
const BuyerRegistrationForm = () => {
	const initalState = {
		fname: "",
		lname: "",
        mobile: 0,
		city: 0,
		email: "",
        aadhar: 0,
        pan: 0,
	};

	// state form state
	const [state, setState] = useState(initalState);

	// get state data from api
	// useEffectAsync(() => {
	// 	setState({
	// 		fullname: user.fullname || "",
	// 		email: user.email || "",
	// 		phone: user.phone || 0,
	// 		country: user.country || "India",
	// 	});
	// }, []);

	const handleChange = (key: string, value: any) => {
		setState({
			...state,
			[key]: value,
		});
	};

	const formSubmitHandler = async () => {
		try {
			const result = await axios.post("/buyer/register", state);

			return customToast({
				icon: "info",
				message: "Profile updated",
			});
		} catch (error: any) {
			if (handleNetworkError(error)) return;

			if (error.response?.data?.msg === "state already updated") {
				return customToast({
					icon: "info",
					message: "Profile already updated",
				});
			}

			return customToast({
				icon: "error",
				message: error.response?.data?.msg,
			});
		}
	};

	return (
		<>
			<h1 className="text-center">Update Profile</h1>
			<div className="divider-100"></div>
			{/* First Name */}
			<div className="form-control">
				<label className="label">
					<span className="label-text">Full name</span>
					<span className="label-text"></span>
				</label>
				<input
					type="email"
					className="input input-bordered"
					value={state.fname}
					onChange={(e) => {
						setState({ ...state, fname: e.target.value });
					}}
				/>
			</div>

            <FormInputElement 
                name="Last Name"
                type="text"
                value={state.lname}
                initialValue=""
                onChange={(e: any) => {
                    setState({ ...state, lname: e.target.value });
                }}
            />

			{/* Email */}
			<FormInputElement 
                name="Email"
                type="text"
                value={state.email}
                initialValue=""
                onChange={(e: any) => {
                    setState({ ...state, email: e.target.value });
                }}
            />


			{/* Phone */}
			<FormNumberElement 
                name="Mobile Number"
                value={state.mobile}
                initialValue={0}
                onChange={(e: any) => {
                    setState({ ...state, mobile: e.target.value });
                }}
            />

			{/* Button */}
			<div className="form-control">
				<button
					className="btn btn-outline mt-4"
					onClick={formSubmitHandler}
				>
					Update state
				</button>
			</div>
		</>
	);
};

export default BuyerRegistrationForm;
