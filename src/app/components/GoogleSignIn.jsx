"use client";

import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import { createUserDocument } from "../firebase/initializeDatabase";

const GoogleSignIn = ({ onSignInSuccess, onSignInError }) => {
	// const handleGoogle = async (e) => {
	// 	const provider = await new GoogleAuthProvider();
	// 	return signInWithPopup(auth, provider);
	// };
	const handleGoogle = async (e) => {
		try {
			const provider = new GoogleAuthProvider();
			const result = await signInWithPopup(auth, provider);

			// Create/get user document in Firestore
			const userData = await createUserDocument(result.user);

			// Call success callback if provided
			if (onSignInSuccess) {
				onSignInSuccess(userData);
			}
		} catch (error) {
			console.error("Error during Google sign-in:", error);
			if (onSignInError) {
				onSignInError(error);
			}
		}
	};

	return (
		<div>
			<button onClick={handleGoogle} className="bg-green-500 text-white p-5">
				Sign In
			</button>
		</div>
	);
};

export default GoogleSignIn;
