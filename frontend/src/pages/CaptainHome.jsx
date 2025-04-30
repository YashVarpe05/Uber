import { Link } from "react-router-dom";
import CaptainDetails from "../components/CaptainDetails";
import RidePopUp from "../components/RidePopUp";
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import ConfirmRidePopUp from "../components/ConfirmRidePopUp";
import gsap from "gsap";
const CaptainHome = () => {
	const [ridePopupPanel, setRidePopupPanel] = useState(true);
	const ridePopupPanelRef = useRef(null);
	const confirmRidePopuPanelRef = useRef(null);
	const [ConfirmRidePopUpPanel, setConfirmRidePopupPanel] = useState(false);
	useGSAP(() => {
		if (ridePopupPanel) {
			gsap.to(ridePopupPanelRef.current, {
				transform: "translateY(0)",
			});
		} else {
			gsap.to(ridePopupPanelRef.current, {
				transform: "translateY(100%)",
			});
		}
	}, [ridePopupPanel]);
	useGSAP(() => {
		if (ConfirmRidePopUpPanel) {
			gsap.to(confirmRidePopuPanelRef.current, {
				transform: "translateY(0)",
			});
		} else {
			gsap.to(confirmRidePopuPanelRef.current, {
				transform: "translateY(100%)",
			});
		}
	}, [ConfirmRidePopUpPanel]);

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

			<div
				ref={ridePopupPanelRef}
				className="fixed w-full z-10 translate-y-full bottom-0 bg-white px-3 py-10 pt-12"
			>
				<RidePopUp
					setRidePopupPanel={setRidePopupPanel}
					setConfirmRidePopupPanel={setConfirmRidePopupPanel}
				/>
			</div>

			<div
				ref={confirmRidePopuPanelRef}
				className="fixed w-full h-screen z-10 translate-y-full bottom-0 bg-white px-3 py-10 pt-12"
			>
				<ConfirmRidePopUp
					setConfirmRidePopupPanel={setConfirmRidePopupPanel}
					setRidePopupPanel={setRidePopupPanel}
				/>
			</div>
		</div>
	);
};

export default CaptainHome;
