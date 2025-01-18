import React, { useState } from "react";

import { Link } from "react-router-dom";
const CaptainLogin = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [captainData, setCaptainData] = useState({});
	const submitHandler = (e) => {
		e.preventDefault();
		setCaptainData({ email: email, password: password });
		console.log(captainData);

		setEmail("");
		setPassword("");
	};
	return (
		<div className="p-7 h-screen flex flex-col justify-between ">
			<div>
				<img
					className="w-16 mb-10"
					src="https://www.svgrepo.com/show/505031/uber-driver.svg"
					alt=""
				/>
				<form
					onSubmit={(e) => {
						submitHandler(e);
					}}
				>
					<h3 className="text-lg font-semibold mb-2">What&apos;s your email</h3>
					<input
						type="email"
						className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base "
						required
						value={email}
						onChange={(e) => {
							setEmail(e.target.value);
						}}
						placeholder="emai@example.com"
					/>
					<h3 className="text-lg font-semibold mb-2">Enter Password</h3>
					<input
						type="password"
						className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
						required
						placeholder="password"
						value={password}
						onChange={(e) => {
							setPassword(e.target.value);
						}}
					/>
					<button className="bg-[#111] text-white mb-3 rounded px-4 py-2 font-semibold w-full text-lg placeholder:text-base">
						Login
					</button>
				</form>
				<p className="text-center ">
					Join a fleet ?
					<Link to="/captain-signup" className="text-blue-600 ">
						Register as a Captain
					</Link>
				</p>
			</div>
			<div className="">
				<Link
					to="/login"
					className="bg-[#ff6c31] flex items-center justify-center text-white font-semibold mb-5 rounded px-4 py-2 w-full text-lg placeholder:text-base"
				>
					Sign in as User
				</Link>
			</div>
		</div>
	);
};

export default CaptainLogin;
