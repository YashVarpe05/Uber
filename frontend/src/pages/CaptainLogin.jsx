import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { CaptainDataContext } from "../context/CaptainContext";

const Captainlogin = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	const { setCaptain } = React.useContext(CaptainDataContext);
	const navigate = useNavigate();

	const submitHandler = async (e) => {
		e.preventDefault();
		setError("");
		setIsLoading(true);

		try {
			const captainData = {
				email: email,
				password,
			};

			const response = await axios.post(
				`${import.meta.env.VITE_BASE_URL}/captains/login`,
				captainData
			);

			if (response.status === 200) {
				const data = response.data;

				// Make sure token is stored before setting captain
				localStorage.setItem("token", data.token);
				setCaptain(data.captain);

				// Clear form fields
				setEmail("");
				setPassword("");

				// Navigate after everything is set
				navigate("/captain-home");
			}
		} catch (err) {
			console.error("Login error:", err);
			if (err.response && err.response.data) {
				if (err.response.data.message) {
					setError(err.response.data.message);
				} else {
					setError("Login failed. Please check your credentials.");
				}
			} else {
				setError("Network error. Please try again.");
			}
		} finally {
			setIsLoading(false);
		}
	};
	return (
		<div className="p-7 h-screen flex flex-col justify-between">
			<div>
				<img
					className="w-20 mb-3"
					src="https://www.svgrepo.com/show/505031/uber-driver.svg"
					alt=""
				/>

				<form
					onSubmit={(e) => {
						submitHandler(e);
					}}
				>
					<h3 className="text-lg font-medium mb-2">What's your email</h3>
					<input
						required
						value={email}
						onChange={(e) => {
							setEmail(e.target.value);
						}}
						className="bg-[#eeeeee] mb-7 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base"
						type="email"
						placeholder="email@example.com"
					/>
					<h3 className="text-lg font-medium mb-2">Enter Password</h3>
					<input
						className="bg-[#eeeeee] mb-7 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base"
						value={password}
						onChange={(e) => {
							setPassword(e.target.value);
						}}
						required
						type="password"
						placeholder="password"
					/>{" "}
					{error && <p className="text-red-500 mb-3 text-center">{error}</p>}
					<button
						className="bg-[#111] text-white font-semibold mb-3 rounded-lg px-4 py-2 w-full text-lg placeholder:text-base"
						disabled={isLoading}
					>
						{isLoading ? "Logging in..." : "Login"}
					</button>
				</form>
				<p className="text-center">
					Join a fleet?{" "}
					<Link to="/captain-signup" className="text-blue-600">
						Register as a Captain
					</Link>
				</p>
			</div>
			<div>
				<Link
					to="/login"
					className="bg-[#d5622d] flex items-center justify-center text-white font-semibold mb-5 rounded-lg px-4 py-2 w-full text-lg placeholder:text-base"
				>
					Sign in as User
				</Link>
			</div>
		</div>
	);
};

export default Captainlogin;
