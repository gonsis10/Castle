"use client";

import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { watchUserScore, setUserCastle } from "../firebase/initializeDatabase";

const CastleShopItem = ({ imagePath = "/api/placeholder/200/200", name = "Castle Name", price = 0 }) => {
	const [score, setScore] = useState(0);
	const { user } = useAuth();

	useEffect(() => {
		let unsubscribe;

		if (user) {
			try {
				// Set up the listener
				unsubscribe = watchUserScore(user.uid, (newScore) => {
					setScore(newScore);
					console.log(newScore);
				});
			} catch (err) {
				setError(err.message);
			}
		}

		return () => {
			if (unsubscribe) {
				unsubscribe();
			}
		};
	}, [user]);

	const level = Math.floor(price / 20);

	return (
		<div
			className={`w-36 h-36 rounded-lg shadow-md overflow-hidden transition-transform bg-white ${
				level > Math.floor(score / 20) ? "opacity-50 hover:cursor-not-allowed" : "hover:scale-105 hover:cursor-pointer"
			}`}
			onClick={() => {
				if (level <= Math.floor(score / 20)) {
					setUserCastle(user, imagePath);
					console.log("Purchased");
				}
			}}
		>
			{/* SVG container - reduced height to 32 (128px) to leave room for text */}
			<div className="w-full h-24 flex items-center justify-center p-3">
				<img src={imagePath} alt={name} className="w-full h-full object-contain" />
			</div>

			<div className="p-2">
				<h3 className="font-medium text-sm truncate text-black">{name}</h3>
				<p className="text-sm font-bold text-green-600">Level {level.toLocaleString()}</p>
			</div>
		</div>
	);
};

export default CastleShopItem;
