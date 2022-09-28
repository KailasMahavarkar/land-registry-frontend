import { NextPage } from "next";
import React from "react";

type Props = {
    submitHandler: () => void;
    value: string;
    className?: string;
};

const FormButtonElement: NextPage<Props> = ({ submitHandler, className, value }) => {
	return (
		<div className="form-control">
			<button
				className={ className || "btn btn-primary btn-outline mt-4" }  
				onClick={submitHandler}
			>
				{value}
			</button>
		</div>
	);
};

export default FormButtonElement;
