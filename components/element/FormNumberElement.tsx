import { NextPage } from "next";

type Props = {
	name: string;
    initialValue: any;
    value: any;
    onChange: any;
    min?: number;
    max?: number;
};

const FormNumberElement: NextPage<Props> = ({ min, max, name, initialValue, value, onChange }) => {
	return (
		<div className="form-control">
			<label className="label">
				<span className="label-text">{name}</span>
				<span className="label-text"></span>
			</label>
			<input
				type="number"
				className="input input-bordered"
				value={initialValue || value}
                min={min || 100000}
                max={max || 9999999999}
				onChange={onChange}
			/>
		</div>
	);
};

export default FormNumberElement;
