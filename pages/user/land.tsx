import { useContext } from "react";
import CustomContext from "../../components/context/custom.context";

const LandPage = () => {
	const context = useContext(CustomContext);
	const singleLand = context.singleLand;

	return (
		<div className="overflow-x-auto">
			{Object.entries(singleLand).map(([key, value], i) => {
				console.log(value);

				return (
					<>
						{key === "attributes" && (
							<table className="table max-w-screen m-5 max-w-full ">
								{/* <!-- head --> */}
								<thead>
									<tr>
										<th>Key</th>
										<th>Value</th>
									</tr>
								</thead>
								<tbody>
									{Object.entries(value).map(([k, v], i) => {
										return (
											<tr key={i}>
												<td>{k}</td>
												<td>
													<pre>
														{JSON.stringify(
															v,
															null,
															4
														)}
													</pre>
												</td>
											</tr>
										);
									})}
								</tbody>
							</table>
						)}

						{key === "children" && (
							<div>
								<h1>Children</h1>
								{JSON.stringify(value, null, 4)}
							</div>
						)}
					</>
				);
			})}
		</div>
	);
};

export default LandPage;
