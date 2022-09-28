import { useState } from "react";
import { handleNetworkError, useEffectAsync } from "../../helper";
import axios from "axios";
import customToast from "../../toast";

// style --> formstyle

// profile form
const LoginForm = () => {
	const initalState = {
		username: "",
		password: "",
	};

	// profile form state
	const [profile, setProfile] = useState(initalState);

	// get profile data from redux
	// useEffectAsync(() => {
	// 	setProfile({
	// 		fullname: user.fullname || "",
	// 		email: user.email || "",
	// 		phone: user.phone || 0,
	// 		country: user.country || "India",
	// 	});
	// }, []);

	const handleChange = (key: string, value: any) => {
		setProfile({
			...profile,
			[key]: value,
		});
	};

	const formSubmitHandler = async () => {
		try {
			const result = await axios.patch("/user/profile-update", profile);

			return customToast({
				icon: "info",
				message: "Profile updated",
			});
		} catch (error: any) {
			if (handleNetworkError(error)) return;

			if (error.response?.data?.msg === "profile already updated") {
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
			<h1 className="text-center">Login Form</h1>
			<div className="divider-100"></div>
			{/* Full Name */}
			<div className="form-control">
				<label className="label">
					<span className="label-text">UserName</span>
					<span className="label-text"></span>
				</label>
				<input
					type="email"
					className="input input-bordered"
					value={profile.username}
					onChange={(e) => {
						setProfile({ ...profile, username: e.target.value });
					}}
				/>
			</div>

			{/* Email */}
			<div className="form-control ">
				<label className="label">
					<span className="label-text">Password</span>
					<span className="label-text"></span>
				</label>
				<input
					type="password"
					className="input input-bordered"
					value={profile.password}
					onChange={(e) => {
						setProfile({ ...profile, password: e.target.value });
					}}
				/>
			</div>

			{/* select */}
			<div className="form-control ">
				<label className="label">
					<span className="label-text">Password</span>
					<span className="label-text"></span>
				</label>
				{/* select */}
				<select
					className="input input-bordered"
					value={profile.password}
					onChange={(e) => {}}
				>
					<option value="1">Seller</option>
					<option value="2">Buyer</option>
					<option value="2">Admin</option>

				</select>
			</div>

			{/* Button */}
			<div className="form-control">
				<button
					className="btn btn-outline mt-4"
					onClick={formSubmitHandler}
				>
					Login User
				</button>
			</div>
		</>
	);
};

export default LoginForm;
