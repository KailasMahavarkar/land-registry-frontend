export type geoLocationType = {
	corners: Array<{
		lat: number;
		lng: number;
	}>;
	center: {
		lat: number;
		lng: number;
	};
};

export type updateType = {
	message: string;
	timestamp: number;
};

export type singleLandAttributeType = {
	token: string;

	// geolocation
	geoLocation: geoLocationType;

	// reference
	isPolygon: boolean;
	isRectangle: boolean;

	// owner details
	owner: string;
	ownerAddress: string;
	ownerEmail: string;
	ownerPhone: string;

	// owner document details
	ownerDocuments: {
		documentName: string;
		documentLinks: string[];
		documentHash: string;
		verified: boolean;
	}[];

	// land document details
	landDocuments: {
		documentName: string;
		documentHash: string;
		verified: boolean;
	}[];

	landImages: {
		imageHash: string;
		imageLink: string;
	}[];

	// plot details
	price: number;
	status: string;
	description: string;

	// government details
	government: string;
	governmenttype: string;

	// updates
	updates: updateType[];

	// timestamps
	createdAt: number;
	updatedAt: number;
	deletedAt: number;

	isChainValid: boolean;
};

// react-d3-tree
export interface LandTreeType {
	name: string;
	attributes: singleLandAttributeType;
	children: LandTreeType[];
}

export type blockChainType = {
	chain: Array<LandTreeType>;
	updatedAt: number;
	createAt: number;
};

