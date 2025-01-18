import React, { useState } from "react";
import { Link } from "react-router-dom";

const CaptainSignup = () => {
	const [firstname, setFirstname] = useState("");
	const [lastname, setLastname] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [CaptainData, setCaptainData] = useState({});
	const submitHandler = (e) => {
		e.preventDefault();
		setCaptainData({
			fullName: {
				firstname: firstname,
				lastname: lastname,
			},
			email: email,
			password,
		});

		setLastname("");
		setFirstname("");
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
				<form onSubmit={(e) => submitHandler(e)}>
					<h3 className="text-lg font-semibold mb-2">What&apos;s your name</h3>
					<div className="flex gap-5">
						<input
							type="name"
							className="bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-1/2  text-lg placeholder:text-base "
							required
							value={firstname}
							onChange={(e) => {
								setFirstname(e.target.value);
							}}
							placeholder="First name"
						/>
						<input
							type="name"
							className="bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base "
							required
							value={lastname}
							onChange={(e) => {
								setLastname(e.target.value);
							}}
							placeholder="Last name"
						/>
					</div>

					<h3 className="text-lg font-semibold mb-2">What&apos;s your email</h3>
					<input
						type="email"
						className="bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-base "
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
						className="bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
						required
						value={password}
						onChange={(e) => {
							setPassword(e.target.value);
						}}
						placeholder="password"
					/>
					<button className="bg-[#111] text-white mb-3 rounded px-4 py-2 font-semibold w-full text-lg placeholder:text-base">
						Login
					</button>
				</form>
				<p className="text-center ">
					Already have a account?
					<Link to="/captain-login" className="text-blue-600 ">
						Login here
					</Link>
				</p>
			</div>
			<div className="mt-11">
				<p className="text-[12px] leading-2 text-gray-500">
					This site is protected by reCAPTCHA and the{" "}
					<span className="underline">Google Privacy Policy </span> and{" "}
					<span className="underline">Term of Service apply </span>
				</p>
			</div>
		</div>
	);
};

export default CaptainSignup;
