import { Link } from "react-router-dom";
const Riding = () => {
	return (
		<div className="h-screen">
			<Link
				to="/home"
				className="fixed right-2 top-2 h-10 w-10 bg-white flex items-center justify-center rounded-full"
			>
				<i className=" text-lg font-medium ri-home-5-line"></i>
			</Link>
			<div className="h-1/2  ">
				<img
					className="h-full w-full object-cover"
					src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
					alt=""
				/>
			</div>
			<div className="h-1/2  p-4">
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
				<button className="w-full mt-5 bg-green-600 text-white font-semibold p-2 rounded-lg">
					Make a Payment
				</button>
			</div>
		</div>
	);
};

export default Riding;
