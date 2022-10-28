import { NextPage } from "next";
import SideBar from "./Sidebar";

const MainComponent: NextPage<any, any> = ({ Component, props }) => {
	return (
		<>
			<div className="flex justify-center items-center w-full ">
				<div className="flex min-h-screen min-w-full ">
					<div className="sidebar bg-purple-900 ">
						<SideBar />
					</div>
					<div className="flex flex-col w-full min-w-full ">
						<Component {...props} />
						<footer>
							<div className="text-center text-[15px] glass p-5">
								<p>
									Copyright © 2022 - All right reserved by
									Government
								</p>
							</div>
						</footer>
					</div>
				</div>
			</div>
		</>
	);
};

export default MainComponent;
