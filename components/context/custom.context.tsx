import { createContext } from "react";
import { LandTreeType, singleLandAttributeType } from "../../types/type";

export type customContextType = {
	singleLand: LandTreeType;
	setSingleLand: (value: LandTreeType) => void;
};

export const defaultSingleLandValues = {
	name: "",
	attributes: {
		token: "",
		// geolocation
		geoLocation: {
			corners: [
				{
					lat: 0,
					lng: 0,
				},
				{
					lat: 0,
					lng: 0,
				},
				{
					lat: 0,
					lng: 0,
				},
				{
					lat: 0,
					lng: 0,
				},
			],
			center: {
				lat: 0,
				lng: 0,
			},
		},

		// reference
		isPolygon: false,
		isRectangle: false,

		// owner details
		owner: "",
		ownerAddress: "",
		ownerEmail: "",
		ownerPhone: "",

		// owner document details
		ownerDocuments: [],

		// land document details
		landDocuments: [],

		// land images
		landImages: [],

		// plot details
		price: 0,
		status: "Available",
		description: "",

		// government details
		government: "",
		governmenttype: "",

		// updates
		updates: [],

		// timestamps
		createdAt: 0,
		updatedAt: 0,
		deletedAt: 0,

		// validation
		isChainValid: false,
	},
	children: [],
};

const CustomContext = createContext<customContextType>({
	singleLand: defaultSingleLandValues,
	setSingleLand: () => {},
});

export default CustomContext;
