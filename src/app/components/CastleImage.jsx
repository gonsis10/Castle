"use client";

import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import Image from "next/image";

export const CastleImage = () => {
	const [displayCastle, setDisplayCastle] = useState(null);
	const { user } = useAuth();

	useEffect(() => {
		let unsubscribe;

		if (user) {
			try {
				// Set up the listener
				unsubscribe = watchUserScore(user.uid, (newScore) => {
					setDisplayCastle(<Image src="src\app\shop\tent.png" alt="tent" />);

					// if (newScore >= 3 && newScore < 5) {
					// 	return <Image src="src\app\shop\shack.png" alt="shack" />;
					// }

					// if (newScore >= 5) {
					// 	return <Image src="src\app\shop\castle.png" alt="castle" />;
					// }
				});
			} catch (err) {
				console.log(err.message);
			}
		}

		return () => {
			if (unsubscribe) {
				unsubscribe();
			}
		};
	}, [user]);

	return <div>{displayCastle}</div>;
};
