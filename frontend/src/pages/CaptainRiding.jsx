import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import FinishRide from "../components/FinishRide";

const CaptainRiding = () => {
	const [finishRidePanel, setFinishRidePanel] = useState(false);
	const finishRidePanelRef = useRef(null);
	useGSAP(() => {
		if (finishRidePanel) {
			gsap.to(finishRidePanelRef.current, {
				transform: "translateY(0)",
			});
		} else {
			gsap.to(finishRidePanelRef.current, {
				transform: "translateY(100%)",
			});
		}
	}, [finishRidePanel]);
	return (
		<div>
			<div className="h-screen relative">
				<div className="fixed p-6 top-0 flex items-center justify-between w-screen">
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
				<div className="h-4/5  ">
					<img
						className="h-full w-full object-cover"
						src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
						alt=""
					/>
				</div>
				<div
					className="h-1/5 flex items-center justify-between relative p-6 bg-yellow-400 pt-10"
					onClick={() => {
						setFinishRidePanel(true);
					}}
				>
					<h5
						className="p-1 text-center w-[95%] absolute top-0"
						onClick={() => {
							// props.setRidePopupPanel(false);
						}}
					>
						<i className="text-3xl text-black  ri-arrow-up-wide-line"></i>
					</h5>
					<h4 className="text-xl font-semibold">4 KM away</h4>
					<button className="bg-green-600 text-white font-semibold p-3 px-10 rounded-lg">
						Complete Ride{" "}
					</button>
				</div>
				<div
					ref={finishRidePanelRef}
					className="fixed w-full z-10 translate-y-full bottom-0 bg-white px-3 py-10 pt-12"
				>
					<FinishRide setFinishRidePanel={setFinishRidePanel} />
				</div>
			</div>
		</div>
	);
};

export default CaptainRiding;
