import React from "react";
import { CastleImage } from "../components/CurrentCastle";

const Castle = () => {
	return (
		<div className="App">
			<div>Your Castle:</div>
			<div>
				<CastleImage />
			</div>
		</div>
	);
};

export default Castle;
