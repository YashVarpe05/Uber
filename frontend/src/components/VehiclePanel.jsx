import React from "react";

const VehiclePanel = (props) => {
	return (
		<div>
			<h5
				className="p-1 text-center w-[93%] absolute top-0"
				onClick={() => {
					props.setvehiclePanel(false);
				}}
			>
				<i className="text-3xl text-green-200  ri-arrow-down-wide-line"></i>
			</h5>
			<h2 className="text-2xl font-semibold mb-5">Choose a Vehicle</h2>
			<div
				onClick={() => {
					props.setConfirmRidePanel(true);
				}}
				className="flex w-full border-2 active:border-black bg-gray-100  mb-2 rounded-xl items-center justify-between p-3"
			>
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
			<div
				onClick={() => {
					props.setConfirmRidePanel(true);
				}}
				className="flex w-full border-2 active:border-black bg-gray-100 mb-2 rounded-xl items-center justify-between p-3"
			>
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
			<div
				onClick={() => {
					props.setConfirmRidePanel(true);
				}}
				className="flex w-full border-2 active:border-black bg-gray-100 mb-2 rounded-xl items-center justify-between p-3"
			>
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
	);
};

export default VehiclePanel;
