// helpers/firebaseUser.js
import { doc, getDoc, setDoc, getFirestore } from "firebase/firestore";

const db = getFirestore();

export const createUserDocument = async (user) => {
	if (!user) return null;

	// Reference to the user document
	const userRef = doc(db, "users", user.uid);

	// Check if user document exists
	const userSnap = await getDoc(userRef);

	if (!userSnap.exists()) {
		const userData = {
			uid: user.uid,
			email: user.email,
			displayName: user.displayName,
			photoURL: user.photoURL,
			createdAt: new Date(),
			// Add any additional fields you want to store
		};

		try {
			await setDoc(userRef, userData);
			console.log("New user created in Firestore");
			return userData;
		} catch (error) {
			console.error("Error creating user document:", error);
			throw error;
		}
	}

	return userSnap.data();
};

export const getUserData = async (uid) => {
	if (!uid) return null;

	const userRef = doc(db, "users", uid);
	const userSnap = await getDoc(userRef);

	if (userSnap.exists()) {
		return userSnap.data();
	}

	return null;
};

export const updateUserData = async (uid, data) => {
	if (!uid || !data) return null;

	const userRef = doc(db, "users", uid);

	try {
		await setDoc(userRef, data, { merge: true });
		return await getUserData(uid);
	} catch (error) {
		console.error("Error updating user document:", error);
		throw error;
	}
};
