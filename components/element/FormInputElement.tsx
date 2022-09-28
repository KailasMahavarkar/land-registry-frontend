import { NextPage } from "next";

type Props = {
	name: string;
    type: string;
    initialValue: any;
    value: any;
    onChange: any;
    placeholder?: string;
};

const FormInputElement: NextPage<Props> = ({ name, type, initialValue, value, onChange }) => {
	return (
		<div className="form-control">
			<label className="label">
				<span className="label-text">{name}</span>
				<span className="label-text"></span>
			</label>
			<input
				type={type}
				className="input input-bordered"
				value={initialValue || value}
				onChange={onChange}
                placeholder={name}
			/>
		</div>
	);
};

export default FormInputElement;
