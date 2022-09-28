import { NextPage } from "next";
import SideBar from "./Sidebar";

const MainComponent: NextPage<any, any> = ({ Component, props }) => {
	return (
		<>
			<div className="main">
				<div className="sidebar border-2  bg-purple-900 ">
					<SideBar />
				</div>
				<div className="content glass ">
					<Component {...props} />
				</div>
			</div>
			<footer>
				<div className="text-center text-[15px] glass p-5">
					<p>Copyright © 2022 - All right reserved by Government</p>
				</div>
			</footer>
		</>
	);
};

export default MainComponent;
