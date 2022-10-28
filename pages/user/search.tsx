import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";
import React, { useContext, useState } from "react";
import Tree from "react-d3-tree";
import CustomContext from "../../components/context/custom.context";
import { useEffectAsync } from "../../helper";
import { blockChainType } from "../../types/type";

// refer singleLandChainType
let landRegistryChain: blockChainType = {
	chain: [
		{
			name: "Land 1",
			attributes: {
				token: "0x2dae3062a6028984535dacec2a940b53866967ff2e69912fee1b08cf0a43fc9c",
				// geolocation
				geoLocation: {
					corners: [
						{
							lat: 12.123,
							lng: 12.123,
						},
						{
							lat: 12.123,
							lng: 12.123,
						},
						{
							lat: 12.123,
							lng: 12.123,
						},
						{
							lat: 12.123,
							lng: 12.123,
						},
					],
					center: {
						lat: 12.123,
						lng: 12.123,
					},
				},

				// reference
				isPolygon: false,
				isRectangle: true,

				// owner details
				owner: "Rana Singh I",
				ownerAddress: "Pushkar, Rajasthan",
				ownerEmail: "ranasingh@gmail.com",
				ownerPhone: "1234567890",

				// owner document details
				ownerDocuments: [
					{
						documentName: "Aadhar Card",
						documentLinks: ["https://aadhar.com/123"],
						documentHash: "123",
						verified: true,
					},
					{
						documentName: "Pan Card",
						documentLinks: ["https://pan.com/123"],
						documentHash: "1234567890",
						verified: true,
					},
				],

				// land document details
				landDocuments: [
					{
						documentName: "7/12",
						documentHash: "123",
						verified: true,
					},
					{
						documentName: "ROR",
						documentHash: "1234567890",
						verified: true,
					},
				],

				// land images
				landImages: [
					{
						imageHash: "123",
						imageLink:
							"https://mediacdn.99acres.com/media1/14951/17/299037954M-1622383195262.jpeg",
					},
					{
						imageHash: "1234567890",
						imageLink:
							"https://mediacdn.99acres.com/media1/18522/1/370441410M-1657299932217.jpg",
					},
				],

				// plot details
				price: 1000000,
				status: "Available",
				description: "This is a plot of land",

				// government details
				government: "Rajasthan",
				governmenttype: "State",

				// updates
				updates: [
					{
						message: "This is a message",
						timestamp: 1234567890,
					},
					{
						message: "This is a message two",
						timestamp: 1234567890,
					},
				],

				// timestamps
				createdAt: 1234567890,
				updatedAt: 1234567890,
				deletedAt: -1,

				// validation
				isChainValid: true,
			},
			children: [],
		},
	],
	createAt: 12345,
	updatedAt: 12345,
};

const UserSearchPage = () => {
	const context = useContext(CustomContext);

	const router = useRouter();
	const [search, setSearch] = useState(false);

	useEffectAsync(() => {
		if (!router.isReady) {
			return;
		}
	}, []);

	return (
		<>
			<div className="flex flex-col test w-full h-full items-center justify-center prose max-w-none">
				<div className="flex child:m-2">
					<h1>Search Land by Token</h1>
					<FontAwesomeIcon icon={faSearch} size="2x" />
				</div>

				<input
					type="text"
					className="input input-bordered w-1/2 mt-5 rounded-full"
					placeholder="Search Token by token"
				/>
				<div className="flex w-full items-center justify-center ">
					{/* submit */}
					<div
						className="btn btn-primary rounded-sm btn-sm mt-5 "
						onClick={() => {
							setSearch(true);
						}}
					>
						Submit
					</div>
				</div>

				{search && (
					<div className="">
						{landRegistryChain.chain.map((land, index) => {
							const { attributes, children } = land;

							return (
								<>
									<div
										key={index}
										className="flex card card-side bg-base-100 shadow-xl items-center justify-center "
									>
										<figure>
											<img
												src="https://placeimg.com/300/200/arch"
												alt="Movie"
											/>
										</figure>
										<div className="card-body">
											<h2 className="card-title">
												Owned by: {attributes.owner}
											</h2>
											<p>Token: {attributes.token}</p>
											<div className="card-actions justify-end">
												<div className="btn-group">
													<button
														className="btn btn-active"
														onClick={() => {
															context.setSingleLand(
																land
															);

															router.push(
																"/user/land"
															);
														}}
													>
														View Details
													</button>
												</div>
											</div>
										</div>
									</div>
								</>
							);
						})}
					</div>
				)}
			</div>
		</>
	);
};

export default UserSearchPage;
