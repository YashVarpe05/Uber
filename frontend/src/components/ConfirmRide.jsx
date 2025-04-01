import React from "react";

const ConfirmRide = (props) => {
	return (
		<div>
			<h5
				className="p-1 text-center w-[93%] absolute top-0"
				onClick={() => {
					props.setvehiclePanel(false);
				}}
			>
				<i className="text-3xl text-green-200  ri-arrow-down-wide-line"></i>
			</h5>
		</div>
	);
};

export default ConfirmRide;
