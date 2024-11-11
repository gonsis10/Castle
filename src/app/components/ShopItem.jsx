import React from "react";

const CastleShopItem = ({ imagePath = "/api/placeholder/200/200", name = "Castle Name", price = 0 }) => {
	return (
		<div className="w-36 h-36 rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105 hover:cursor-pointer bg-white">
			{/* SVG container - reduced height to 32 (128px) to leave room for text */}
			<div className="w-full h-24 flex items-center justify-center p-3">
				<img src={imagePath} alt={name} className="w-full h-full object-contain" />
			</div>

			<div className="p-2">
				<h3 className="font-medium text-sm truncate text-black">{name}</h3>
				<p className="text-sm font-bold text-green-600">${price.toLocaleString()}</p>
			</div>
		</div>
	);
};

export default CastleShopItem;
