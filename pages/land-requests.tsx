import React from "react";

const LandRequestPage = () => {
	return (
		<div className="p-10">
			<div className="text-xl  font-bold ">
				<h1>Requests Information Table</h1>
			</div>

			<div className="overflow-x-auto">
				<table className="table w-full">
					{/* <!-- head --> */}
					<thead>
						<tr>
							<th>#</th>
							<th>Buyer Id</th>
							<th>Land Id</th>
							<th>Request Status</th>
							<th>Approve Request</th>
						</tr>
					</thead>
					<tbody>
						{/* <!-- row 1 --> */}
						<tr>
							<th>1</th>
							<td>0x775464e68f15d89736219c85465498a</td>
							<td>1</td>
							<td>false</td>
							<td>
								<button className="btn btn-primary">
									Approve
								</button>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default LandRequestPage;
