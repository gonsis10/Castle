import React from "react";
import { CastleImage } from "../components/CurrentCastle";
import ShopItem from "../components/ShopItem";
import "./shop.css";

const Castle = () => {
	return (
		<div className="App overflow-hidden">
			<div className="Wrapper">
				<h1>
					Castle <strong>Shop</strong>!
				</h1>
				<div className="flex flex-col items-center gap-4">
					<div>
						<h2>Common</h2>
						<div className="flex items-center gap-8">
							<ShopItem />
							<ShopItem />
							<ShopItem />
						</div>
					</div>
					<div>
						<h2>Rare</h2>
						<div className="flex items-center gap-8">
							<ShopItem />
							<ShopItem />
						</div>
					</div>
					<div>
						<h2>Legendary</h2>
						<div className="flex items-center gap-8">
							<ShopItem />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Castle;
