import React from "react";
import LoginForm from "../components/forms/LoginForm";

const login = () => {
	return (
		<>
			<div className="form-wrapper m-2 ">
				<form className="w-[500px] border-2 border-primary">
					<LoginForm />
				</form>
			</div>
		</>
	);
};

export default login;
