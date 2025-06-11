import { useContext } from "react";
import { CaptainDataContext } from "../context/CaptainContext";
const CaptainDetails = () => {
	const { captain } = useContext(CaptainDataContext);

	// If captain data isn't available yet, show a loading state
	if (!captain) {
		return <div>Loading captain details...</div>;
	}

	return (
		<div>
			<div className="flex items-center justify-between">
				<div className="flex items-center justify-start gap-3">
					<img
						className="h-10 w-10 rounded-full object-cover"
						src="https://media.istockphoto.com/id/2173377722/photo/sad-serene-indian-young-woman-contemning-near-window-with-a-blank-expression.webp?a=1&b=1&s=612x612&w=0&k=20&c=urhS1BKzbvL6FmTpjjOGlpIGMv4QdJahKvqoPiH9_DA="
						alt=" "
					/>
					<h4 className="text-lg font-medium capitalize">
						{captain && captain.fullname
							? `${captain.fullname.firstname} ${captain.fullname.lastname}`
							: "Captain Name"}
					</h4>
				</div>
				<div className="">
					<h4 className="text-xl font-semibold ">
						{captain && captain.earnings ? `₹${captain.earnings}` : "₹0.00"}
					</h4>
					<p className="text-sm  text-gray-600">Earned</p>
				</div>
			</div>
			<div className="flex  p-3 bg-gray-50 rounded-xl justify-center gap-5 items-start">
				<div className="text-center ">
					<i className="text-2xl font-thin ri-timer-2-line"></i>
					<h5 className="text-lg font-medium">
						{captain && captain.hoursOnline ? captain.hoursOnline : "0"}
					</h5>
					<p className="text-sm text-gray-600">Hours Online</p>
				</div>
				<div className="text-center">
					<i className="text-2xl font-thin ri-speed-up-line"></i>
					<h5 className="text-lg font-medium">
						{captain && captain.tripCount ? captain.tripCount : "0"}
					</h5>
					<p className="text-sm text-gray-600">Trips</p>
				</div>
				<div className="text-center">
					<i className="text-2xl font-thin ri-booklet-line"></i>
					<h5 className="text-lg font-medium">
						{captain && captain.rating ? captain.rating : "0.0"}
					</h5>
					<p className="text-sm text-gray-600">Rating</p>
				</div>
			</div>
		</div>
	);
};

export default CaptainDetails;
