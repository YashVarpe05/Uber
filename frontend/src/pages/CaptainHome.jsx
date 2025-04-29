import { Link } from "react-router-dom";
import CaptainDetails from "../components/CaptainDetails";
import RidePopUp from "../components/RidePopUp";
const CaptainHome = () => {
	return (
		<div className="h-screen">
			<div
				className="fixed p-6 top-0 flex items-center 
      justify-between w-screen"
			>
				<img
					className="w-16"
					src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
				/>
				<Link
					to="/home"
					className=" h-10 w-10 bg-white flex items-center justify-center rounded-full"
				>
					<i className=" text-lg font-medium ri-logout-box-r-line"></i>
				</Link>
			</div>
			<div className="h-2/5  ">
				<img
					className="h-full w-full object-cover"
					src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
					alt=""
				/>
			</div>
			<div className="h-2/5  p-6">
				<CaptainDetails />
			</div>

			<div className="fixed w-full z-10 bottom-0 bg-white px-3 py-10 pt-12">
				<RidePopUp />
			</div>
		</div>
	);
};

export default CaptainHome;
