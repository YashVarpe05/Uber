import React from "react";

const Home = () => {
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
			<div className="bg-white absolute top-0 w-full p-5">
				<h4 className="text-3xl font-semibold">Find a trip</h4>
				<form action="">
					<input
						type="text"
						className="bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-5"
						placeholder="Add a pick-up location "
					/>
					<input
						type="text"
						placeholder="Enter your destination "
						className="bg-[#eee] px-12 py-2 text-base= rounded-lg w-full mt-3"
					/>
				</form>
			</div>
		</div>
	);
};

export default Home;
