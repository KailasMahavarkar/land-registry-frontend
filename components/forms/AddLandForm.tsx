import React from "react";
import FormInputElement from "../element/FormInputElement";
import FormNumberElement from "../element/FormNumberElement";
import FormButtonElement from "../element/FormButtonElement";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileUpload } from "@fortawesome/free-solid-svg-icons";

const AddLandForm = () => {
	return (
		<div className="form-wrapper m-2 ">
			<form className="w-[500px] border-2 ">
				<h1 className="text-center underline underline-offset-4 ">
					Add Land Form
				</h1>
				{/* Plot Area */}
				<div className="form-control">
					<label className="label">
						<span className="label-text">Area (in sqm.)</span>
						<span className="label-text"></span>
					</label>
					<input
						type="text"
						className="input input-bordered"
						value=""
					/>
				</div>

				{/* City */}
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

				{/* State */}
				<div className="form-control">
					<label className="label">
						<span className="label-text">State</span>
						<span className="label-text"></span>
					</label>
					<input
						type="text"
						className="input input-bordered"
						value=""
					/>
				</div>

				{/* Price */}
				<div className="form-control">
					<label className="label">
						<span className="label-text">Price</span>
						<span className="label-text"></span>
					</label>
					<input
						type="number"
						className="input input-bordered"
						value=""
					/>
				</div>

				{/* property PID */}
				<div className="form-control">
					<label className="label">
						<span className="label-text">Property PID Number</span>
						<span className="label-text"></span>
					</label>
					<input
						type="number"
						className="input input-bordered"
						value=""
					/>
				</div>

				{/* survery number */}
				<div className="form-control">
					<label className="label">
						<span className="label-text">Survey Number</span>
						<span className="label-text"></span>
					</label>
					<input
						type="number"
						className="input input-bordered"
						value=""
					/>
				</div>

				{/* file upload */}
				<div className="form-control">
					<div className="flex items-center justify-center w-full mt-5">
						<label className="flex flex-col w-full h-[50px] border-2 border-dotted rounded-md">
							<div className="flex items-center justify-center text-center mt-3 ">
								<div>Select Land Images</div>
							</div>
							<input
								multiple
								className="opacity-0 mt-0"
								type="file"
								onChange={undefined}
							/>
						</label>
					</div>
				</div>

				{/* file upload */}
				<div className="form-control">
					<div className="flex items-center justify-center w-full mt-5">
						<label className="flex flex-col w-full h-[50px] border-2 border-dotted rounded-md">
							<div className="flex items-center justify-center text-center mt-3 ">
								<div>Select Aadhar Document</div>
							</div>
							<input
								className="opacity-0 mt-0"
								type="file"
								onChange={undefined}
							/>
						</label>
					</div>
				</div>
			</form>
		</div>
	);
};

export default AddLandForm;
