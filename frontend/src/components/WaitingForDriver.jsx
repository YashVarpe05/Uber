import React from "react";

const WaitingForDriver = (props) => {
	return (
		<div>
			<h5
				className="p-1 text-center w-[93%] absolute top-0"
				onClick={() => {
					props.waitingForDriver(false);
				}}
			>
				<i className="text-3xl text-green-200  ri-arrow-down-wide-line"></i>
			</h5>
			<div className="flex items-center justify-between">
				<img className="h-24 " src="./Final_UberX.webp" alt="" />
				<div className="text-right">
					<h2 className="text-lg font-medium">Yash</h2>
					<h4 className="text-xl font-semibold -mt-1 -mb-1">MH15DC0707</h4>
					<p className="text-sm text-gray-600 ">Ferrari</p>
				</div>
			</div>
			{/* <h2 className="text-2xl font-semibold mb-5">Looking for a Driver</h2> */}
			<div className="flex gap-2 justify-between flex-col items-center">
				{/* <img className="h-24 " src="./Final_UberX.webp" alt="" /> */}
				<div className="w-full mt-5	">
					<div className="flex items-center gap-5 p-3 border-b-2">
						<i className=" text-lg ri-map-pin-2-fill"></i>
						<div className="">
							<h3 className="text-lg font-medium ">562/11-A</h3>
							<p className="text-base text-gray-600 -mt-1">MANJARI (BK) </p>
						</div>
					</div>
					<div className="flex items-center gap-5 p-3 border-b-2">
						{" "}
						<i className=" text-lg ri-map-pin-user-fill"></i>
						<div className="">
							<h3 className="text-lg font-medium ">562/11-A</h3>
							<p className="text-base text-gray-600 -mt-1">MANJARI (BK) </p>
						</div>
					</div>
					<div className="flex items-center gap-5 p-3 ">
						<i className=" text-lg ri-currency-line"></i>
						<div className="">
							<h3 className="text-lg font-medium ">₹ 193.30</h3>
							<p className="text-base text-gray-600 -mt-1">Cash Cash </p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default WaitingForDriver;
