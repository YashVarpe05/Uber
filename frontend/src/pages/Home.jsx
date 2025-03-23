import React, { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "remixicon/fonts/remixicon.css";
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
				opacity: 1,
			});
			gsap.to(panelCloseRef.current, {
				opacity: 1,
			});
		} else {
			gsap.to(panelRef.current, {
				height: "0%",
				opacity: 0,
			});
			gsap.to(panelCloseRef.current, {
				opacity: 0,
			});
		}
	}, [panelOpen]);
	return (
		<div className="h-screen relative">
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
				<div ref={panelRef} className=" bg-red-500  h-0"></div>
			</div>
		</div>
	);
};

export default Home;
