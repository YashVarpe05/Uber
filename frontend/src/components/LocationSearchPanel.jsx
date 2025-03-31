import React from "react";

const LocationSearchPanel = (props) => {
	console.log(props);

	const locations = [
		"24B,Near secreat cafe, at the Foss club pdea, pune",
		"23B,Near Delite cafe, at the CODEX club pdea, pune",
		"69B,Near BC Gar, at the lovde vadi pune",
	];
	return (
		<div>
			{locations.map((elem, i) => {
				return (
					<div
						className="flex gap-4 border-2 p-3 rounded-xl  border-gray-50 active:border-black items-center my-2 justify-start"
						key={i}
						onClick={() => {
							props.setvehiclePanel(true);
							props.setPanelOpen(false);
						}}
					>
						<h2 className="bg-[#eee] h-8 flex items-center justify-center w-12 rounded-full">
							<i className="ri-map-pin-fill"></i>
						</h2>
						<h4 className="font-medium ">{elem}</h4>
					</div>
				);
			})}
		</div>
	);
};

export default LocationSearchPanel;
