import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
	return (
		<div>
			<div className="bg-cover bg-[url(https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_1152,w_1152/v1684855112/assets/96/4dd3d1-94e7-481e-b28c-08d59353b9e0/original/earner-illustra.png)] h-screen pt-5   w-full flex justify-between flex-col  ">
				<img
					className=" w-14 ml-8"
					src="https://companieslogo.com/img/orig/UBER.D-f23d4b1c.png?t=1720244494"
					alt="uber-logo"
				/>
				<div className="bg-white pb-7 py-5 px-10          ">
					<h2 className="text-2xl font-bold ">Get Started with Uber</h2>
					<Link
						to="/login"
						className="flex items-center justify-center w-full bg-black text-white py-3 rounded-md mt-4 "
					>
						Continue
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Home;
