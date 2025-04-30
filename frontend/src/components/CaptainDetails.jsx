const CaptainDetails = () => {
	return (
		<div>
			<div className="flex items-center justify-between">
				<div className="flex items-center justify-start gap-3">
					<img
						className="h-10 w-10 rounded-full object-cover"
						src="https://media.istockphoto.com/id/2173377722/photo/sad-serene-indian-young-woman-contemning-near-window-with-a-blank-expression.webp?a=1&b=1&s=612x612&w=0&k=20&c=urhS1BKzbvL6FmTpjjOGlpIGMv4QdJahKvqoPiH9_DA="
						alt=" "
					/>
					<h4 className="text-lg font-medium">Harsh Patel</h4>
				</div>
				<div className="">
					<h4 className="text-xl font-semibold ">₹295.34</h4>
					<p className="text-sm  text-gray-600">Earned</p>
				</div>
			</div>
			<div className="flex  p-3 bg-gray-50 rounded-xl justify-center gap-5 items-start">
				<div className="text-center ">
					<i className="text-2xl font-thin ri-timer-2-line"></i>
					<h5 className="text-lg font-medium">10.2</h5>
					<p className="text-sm text-gray-600">Hours Online</p>
				</div>
				<div className="text-center">
					<i className="text-2xl font-thin ri-speed-up-line"></i>
					<h5 className="text-lg font-medium">10.2</h5>
					<p className="text-sm text-gray-600">Hours Online</p>
				</div>
				<div className="text-center">
					<i className="text-2xl font-thin ri-booklet-line"></i>
					<h5 className="text-lg font-medium">10.2</h5>
					<p className="text-sm text-gray-600">Hours Online</p>
				</div>
			</div>
		</div>
	);
};

export default CaptainDetails;
