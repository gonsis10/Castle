import React from "react";

const CastleShopItem = ({ imageUrl = "/api/placeholder/200/200", name = "Castle Name", price = 0 }) => {
	return (
		<div className="w-36 h-36 rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105 bg-white">
			{/* Image container */}
			<div className="w-full h-40 overflow-hidden">
				<img src={imageUrl} alt={name} className="w-full h-full object-cover" />
			</div>

			{/* Info section */}
			<div className="p-2">
				<h3 className="font-medium text-sm truncate">{name}</h3>
				<p className="text-sm text-green-600">${price.toLocaleString()}</p>
			</div>
		</div>
	);
};

export default CastleShopItem;
