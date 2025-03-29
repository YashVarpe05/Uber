import React, { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "remixicon/fonts/remixicon.css";
import LocationSearchPanel from "../components/LocationSearchPanel";
const Home = () => {
	const [pickup, setpickup] = useState("");
	const [destination, setDestination] = useState("");
	const submitHandler = (e) => {
		e.prevenDefault();
	};
	const [panelOpen, setpanelOpen] = useState(false);
	const panelRef = useRef(null);
	const panelCloseRef = useRef(null);
	useGSAP(() => {
		if (panelOpen) {
			gsap.to(panelRef.current, {
				height: "70%",
				// opacity: 1,
				padding: 24,
			});
			gsap.to(panelCloseRef.current, {
				opacity: 1,
				padding: 0,
			});
		} else {
			gsap.to(panelRef.current, {
				height: "0%",
				// opacity: 0,
			});
			gsap.to(panelCloseRef.current, {
				opacity: 0,
			});
		}
	}, [panelOpen]);
	return (
		<div className="h-screen relative overflow-hidden">
			<img
				className="w-16 absolute left-5 top-5 "
				src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
				alt="logo"
			/>
			<div className="h-full w-screen ">
				<img
					className="h-full w-full object-cover"
					src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
					alt=""
				/>
			</div>
			<div className=" absolute h-screen flex flex-col justify-end top-0 w-full ">
				<div className="h-[30%] p-5 bg-white relative">
					<h5
						ref={panelCloseRef}
						onClick={() => {
							setpanelOpen(false);
						}}
						className="absolute opacity-0 top-6 right-6 text-2xl"
					>
						<i className="ri-arrow-down-wide-line"></i>
					</h5>
					<h4 className="text-3xl font-semibold">Find a trip</h4>
					<form
						onSubmit={(e) => {
							submitHandler(e);
						}}
					>
						<div className="line absolute h-16 w-1 top-[44%] left-10 bg-gray-800 rounded-full"></div>
						<input
							onClick={() => {
								setpanelOpen(true);
							}}
							value={pickup}
							onChange={(e) => {
								setpickup(e.target.value);
							}}
							type="text"
							className="bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-5"
							placeholder="Add a pick-up location "
						/>
						<input
							onClick={() => {
								setpanelOpen(true);
							}}
							value={destination}
							onChange={(e) => {
								setDestination(e.target.value);
							}}
							type="text"
							placeholder="Enter your destination "
							className="bg-[#eee] px-12 py-2 text-base= rounded-lg w-full mt-3"
						/>
					</form>
				</div>
				<div ref={panelRef} className="bg-white h-0">
					<LocationSearchPanel />
				</div>
			</div>

			<div className="fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-8">
				<h2 className="text-2xl font-semibold mb-5">Choose a Vehicle</h2>
				<div className="flex w-full border-2 active:border-black bg-gray-100  mb-2 rounded-xl items-center justify-between p-3">
					<img src="./carbg.png" alt="" className="h-12" />
					<div className="w-1/2">
						<h4 className="font-medium text-base">
							UberGo
							<span>
								<i className="ri-user-3-fill"></i>4
							</span>
						</h4>
						<h5 className="font-medium text-sm">2 Mins away</h5>
						<p className="font-normal text-xs text-gray-600">
							Affordable, compact rides
						</p>
					</div>
					<h2 className="text-lg font-semibold">₹193.20</h2>
				</div>
				<div className="flex w-full border-2 active:border-black bg-gray-100 mb-2 rounded-xl items-center justify-between p-3">
					<img src="./bike.webp" alt="" className="h-14" />
					<div className="-ml-2 w-1/2">
						<h4 className="font-medium text-base">
							Moto
							<span>
								<i className="ri-user-3-fill"></i>2
							</span>
						</h4>
						<h5 className="font-medium text-sm">3 Mins away</h5>
						<p className="font-normal text-xs text-gray-600">
							Affordable, motorcycle rides
						</p>
					</div>
					<h2 className="text-lg font-semibold">₹65.20</h2>
				</div>
				<div className="flex w-full border-2 active:border-black bg-gray-100 mb-2 rounded-xl items-center justify-between p-3">
					<img src="./auto.webp" alt="" className="h-14" />
					<div className="-ml-2 w-1/2">
						<h4 className="font-medium text-base">
							Uber Auto
							<span>
								<i className="ri-user-3-fill"></i>3
							</span>
						</h4>
						<h5 className="font-medium text-sm">3 Mins away</h5>
						<p className="font-normal text-xs text-gray-600">
							Affordable, Auto rides
						</p>
					</div>
					<h2 className="text-lg font-semibold">₹111.20</h2>
				</div>
			</div>
		</div>
	);
};

export default Home;
