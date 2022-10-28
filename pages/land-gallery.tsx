import { NextPage } from "next";
import React from "react";

const CardComponent: NextPage<any, any> = ({ item }) => {
	return (
		<div className="card w-96 glass m-5 " >
			<figure>
				<img src={item.images[0]} alt="car!" />
			</figure>
			<div className="card-body">
				<h2 className="card-title">23 Sq. m</h2>
				<p>
					{item.city} ({item.state})
				</p>
				<p>PID: {item.id}</p>
				<p>Survery Number: {item.survey_number}</p>
				<p>
					Price: <span className="text-primary">₹{item.price}</span>
				</p>

				<div className="card-actions justify-end">
					<button className="btn btn-primary">View Documents</button>
				</div>
			</div>
		</div>
	);
};

const LandGalleryPage = () => {
	const data = [
		{
			id: 1,
			city: "Akola",
			survey_number: "123",
			state: "Maharashtra",
			area: "1000",
			price: "1000000",
			images: [
				"https://mediacdn.99acres.com/media1/18522/1/370441410M-1657299932217.jpg",
			],
		},
		{
			id: 2,
			city: "Mumbai",
			survey_number: "123",
			state: "Maharashtra",
			area: "1000",
			price: "1000000",
			images: [
				"https://mediacdn.99acres.com/media1/14951/17/299037954M-1622383195262.jpeg",
			],
		},
	];

	return (
		<div className="p-10">
			<div className="flex ">
				{data.map((item, index) => {
					return <CardComponent key={index} item={item}  />;
				})}
			</div>
		</div>
	);
};

export default LandGalleryPage;
