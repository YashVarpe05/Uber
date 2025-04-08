import React, { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "remixicon/fonts/remixicon.css";
import LocationSearchPanel from "../components/LocationSearchPanel";
import VehiclePanel from "../components/VehiclePanel";
import ConfirmRide from "../components/ConfirmRide";
import LookingForDriver from "../components/LookingForDriver";
import WaitingForDriver from "../components/WaitingForDriver";
const Home = () => {
	const [pickup, setpickup] = useState("");
	const [destination, setDestination] = useState("");
	const submitHandler = (e) => {
		e.prevenDefault();
	};
	const [panelOpen, setPanelOpen] = useState(false);
	const panelRef = useRef(null);
	const vehiclePanelRef = useRef(null);
	const waitingForDriverRef = useRef(null);

	const vehicleFoundRef = useRef(null);
	const panelCloseRef = useRef(null);
	const confirmRidePanelRef = useRef(null);
	const [vehiclePanel, setvehiclePanel] = useState(false);
	const [confirmRidePanel, setConfirmRidePanel] = useState(false);
	const [vehicleFound, setVehicleFound] = useState(false);
	const [waitingForDriver, setwaitingForDriver] = useState(false);

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

	useGSAP(() => {
		if (vehiclePanel) {
			gsap.to(vehiclePanelRef.current, {
				transform: "translateY(0)",
			});
		} else {
			gsap.to(vehiclePanelRef.current, {
				transform: "translateY(100%)",
			});
		}
	}, [vehiclePanel]);
	useGSAP(() => {
		if (confirmRidePanel) {
			gsap.to(confirmRidePanelRef.current, {
				transform: "translateY(0)",
			});
		} else {
			gsap.to(confirmRidePanelRef.current, {
				transform: "translateY(100%)",
			});
		}
	}, [confirmRidePanel]);
	useGSAP(() => {
		if (vehicleFound) {
			gsap.to(vehicleFoundRef.current, {
				transform: "translateY(0)",
			});
		} else {
			gsap.to(vehicleFoundRef.current, {
				transform: "translateY(100%)",
			});
		}
	}, [vehicleFound]);
	useGSAP(() => {
		if (waitingForDriver) {
			gsap.to(waitingForDriverRef.current, {
				transform: "translateY(0)",
			});
		} else {
			gsap.to(waitingForDriverRef.current, {
				transform: "translateY(100%)",
			});
		}
	}, [WaitingForDriver]);
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
							setPanelOpen(false);
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
								setPanelOpen(true);
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
								setPanelOpen(true);
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
					<LocationSearchPanel
						// panelOpen={panelOpen}
						setPanelOpen={setPanelOpen}
						// vehiclePanel={vehiclePanel}
						setvehiclePanel={setvehiclePanel}
					/>
				</div>
			</div>

			<div
				ref={vehiclePanelRef}
				className="fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-10 pt-12"
			>
				<VehiclePanel
					setConfirmRidePanel={setConfirmRidePanel}
					setvehiclePanel={setvehiclePanel}
				/>
			</div>
			<div
				ref={confirmRidePanelRef}
				className="fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-6 pt-12"
			>
				<ConfirmRide
					setConfirmRidePanel={setConfirmRidePanel}
					setvehiclePanel={setvehiclePanel}
					setVehicleFound={setVehicleFound}
				/>
				{/* <VehiclePanel setvehiclePanel={setvehiclePanel} /> */}
			</div>
			<div
				ref={vehicleFoundRef}
				className="fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-6 pt-12"
			>
				<LookingForDriver setVehicleFound={setVehicleFound} />
			</div>
			<div
				ref={waitingForDriverRef}
				className="fixed w-full z-10 bottom-0  bg-white px-3 py-6 pt-12"
			>
				<WaitingForDriver WaitingForDriver={WaitingForDriver} />
			</div>
		</div>
	);
};

export default Home;
