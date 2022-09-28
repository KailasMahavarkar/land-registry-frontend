import { useState } from "react";
import { handleNetworkError, useEffectAsync } from "../../helper";
import axios from "axios";
import customToast from "../../toast";

// state form
const BuyerProfileForm = () => {
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
			<div className="form-wrapper m-2 ">
				<form className="w-[500px] border-2 ">
					<h1 className="text-center underline underline-offset-4 ">
						Buyer Profile Form
					</h1>
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

					{/* Last Name */}
					<div className="form-control">
						<label className="label">
							<span className="label-text">Last Name</span>
							<span className="label-text"></span>
						</label>
						<input
							type="number"
							className="input input-bordered"
							value=""
						/>
					</div>

					{/* Last Name */}
					<div className="form-control">
						<label className="label">
							<span className="label-text">Email</span>
							<span className="label-text"></span>
						</label>
						<input
							type="text"
							className="input input-bordered"
							value=""
						/>
					</div>

					{/* Last Name */}
					<div className="form-control">
						<label className="label">
							<span className="label-text">City</span>
							<span className="label-text"></span>
						</label>
						<input
							type="text"
							className="input input-bordered"
							value=""
						/>
					</div>

					{/* Aadhar Number */}
					<div className="form-control">
						<label className="label">
							<span className="label-text">Aadhar</span>
							<span className="label-text"></span>
						</label>
						<input
							type="text"
							className="input input-bordered"
							value=""
						/>
					</div>

					{/* Phone */}
					<div className="form-control">
						<label className="label">
							<span className="label-text">Phone</span>
							<span className="label-text"></span>
						</label>
						<input type="number" className="input input-bordered" />
					</div>

					{/* Button */}
					<div className="form-control">
						<button
							className="btn btn-outline mt-4"
							onClick={formSubmitHandler}
						>
							Update state
						</button>
					</div>
				</form>
			</div>
		</>
	);
};

export default BuyerProfileForm;
