import React, { useState } from "react";
import { Link } from "react-router-dom";
const ConfirmRidePopUp = (props) => {
	const [otp, setOtp] = useState("");
	const submitHander = (e) => {
		e.preventDefault();
	};
	return (
		<div className="h-screen">
			<h5
				className="p-1 text-center w-[93%] absolute top-0"
				onClick={() => {
					props.setRidePopupPanel(false);
				}}
			>
				<i className="text-3xl text-green-200  ri-arrow-down-wide-line"></i>
			</h5>
			<h2 className="text-2xl font-semibold mb-5">
				Confirm this ride to Start
			</h2>
			<div className="flex items-center justify-between p-3 bg-yellow-400 rounded-lg mt-4">
				<div className="flex items-center gap-3 mt-4">
					<img
						className="h-12 w-12 rounded-full object-cover"
						src="https://plus.unsplash.com/premium_photo-1688350808212-4e6908a03925?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHBvcnRyYWl0fGVufDB8fDB8fHww"
						alt=""
					/>
					<h2 className="text-lg font-medium">Mahesh </h2>
				</div>
				<h5 className="text-lg font-semibold">2.2 KM</h5>
			</div>
			<div className="flex gap-2 justify-between flex-col items-center">
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

				<div className="mt-6 w-full">
					<form
						onSubmit={(e) => {
							submitHander(e);
						}}
					>
						<input
							value={otp}
							onChange={(e) => setOtp(e.target.value)}
							type="number"
							placeholder="Enter OTP "
							className="bg-[#eee] px-6 py-4 text-lg font-mono rounded-lg w-full mt-5"
						/>
						<Link
							to="/captain-riding"
							className="w-full mt-5 flex justify-center bg-green-600 text-white font-semibold p-3 rounded-lg "
						>
							Confirm
						</Link>
						<button
							onClick={() => {
								props.setConfirmRidePopupPanel(false);
								props.setRidePopupPanel(false);
							}}
							className="w-full mt-1 bg-red-600 text-white font-semibold p-3 rounded-lg "
						>
							Cancel
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default ConfirmRidePopUp;
