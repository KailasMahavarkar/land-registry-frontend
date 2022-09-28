import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

const Home: NextPage<any> = ({ Component, props }) => {
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

	const data = [
		{
			icon: faUsers,
			value: 1000,
			title: "Total Users",
		},
		{
			icon: faUsers,
			value: 1000,
			title: "Registered Land Count",
		},
		{
			icon: faUsers,
			value: 1000,
			title: "Total Requests",
		},
	];

	const data2 = [
		{
			name: "profile",
			link: "/profile",
			button_text: "View Profile",
		},
		{
			name: "owned lands",
			link: "/land-gallery",
			button_text: "View Your Lands",
		},
		{
			name: "Make Payment for Approved Land Request",
			link: "/payment",
			button_text: "Make Payment",
		},
	];

	return (
		<div className="m-2 ">
			<div className="flex flex-wrap">
				{/* 3 cards */}
				{data.map((item, index) => (
					<>
						<div
							className="card w-96 m-5 bg-secondary text-white shadow-xl"
							key={index}
						>
							<div className="card-body text-center">
								<div>
									<FontAwesomeIcon icon={item.icon} />
								</div>
								<h1>{item.value}</h1>
								<h3 className="font-bolder">{item.title}</h3>
							</div>
						</div>
					</>
				))}

				{data2.map((item, index) => (
					<>
						<div
							className="card w-96 m-5 bg-base-100 shadow-md"
							key={index}
						>
							<div className="card-body">
								<h1>{item.name}</h1>
								<Link href={item.link}>
									<button className="btn btn-primary  rounded-md w-[200px]">
										{item.button_text}
									</button>
								</Link>
							</div>
						</div>
					</>
				))}
			</div>
			<div className="m-5 p-5 shadow-md">
				<div className="text-xl font-bold ">
					<h1>Land Info</h1>
				</div>

				<div className="overflow-x-auto">
					<table className="table w-full">
						{/* <!-- head --> */}
						<thead>
							<tr>
								<th>#</th>
								<th>Area</th>
								<th>City</th>
                                <th>State</th>
                                <th>Price</th>
								<th>Propety PID</th>
								<th>Survey Number</th>
                                <th>Request Land</th>
							</tr>
						</thead>
						<tbody>
							{/* <!-- row 1 --> */}
							<tr>
								<th>1</th>
								<td>450</td>
								<td>Akola</td>
								<td>Maharashtra</td>
                                <td>450000</td>
                                <td>123456789</td>
                                <td>SUV_150</td>

								<td>
									<button className="btn btn-primary">
										Request Land
									</button>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};

export default Home;
