import {
	faArrowDown,
	faGauge,
	faLandmark,
	faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImages } from "@fortawesome/free-regular-svg-icons";

const navArray = [
	{
		name: "Dashboard",
		link: "/",
		icon: <FontAwesomeIcon icon={faGauge} size="1x" width="20px" />,
	},
	{
		name: "Buyer Profile",
		link: "/buyer-profile",
		icon: <FontAwesomeIcon icon={faImages} size="1x" width="20px" />,
	},
	{
		name: "Add Land",
		link: "/add-land",
		icon: <FontAwesomeIcon icon={faLandmark} size="1x" width="20px" />,
	},
	{
		name: "Land Requests",
		link: "/land-requests",
		icon: <FontAwesomeIcon icon={faArrowDown} size="1x" width="20px" />,
	},
	{
		name: "Land Gallery",
		link: "/land-gallery",
		icon: <FontAwesomeIcon icon={faImages} size="1x" width="20px" />,
	},
];

const SideBar = () => {
	return (
		<ul className=" bg-transparent text-white menu p-2 ">
			{navArray.map((item: any, key: number) => (
				<li className="hover:bg-white hover:text-black rounded-md " key={key}>
					<a href={item.link}>
						<>
							{item.icon}
							{item.name}
						</>
					</a>
				</li>
			))}
		</ul>
	);
};

export default SideBar;
