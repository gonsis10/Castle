// helpers/firebaseUser.js
import { doc, getDoc, setDoc, getFirestore, collection, addDoc, deleteDoc } from "firebase/firestore";

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
			score: 0,
			level: 0,
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

// read user data

// ADD TODO ITEM
export const addTodoItem = async (user, todoId, todo) => {
	try {
		const userId = user.uid;
		// Input validation
		// if (!todoId || typeof todoId !== "string") {
		// 	throw new Error("Valid todoId is required");
		// }
		// if (!todo || typeof todo !== "object") {
		// 	throw new Error("Valid todo object is required");
		// }

		// Create document reference with the specific ID
		const todoRef = doc(db, "users", userId, "todos", todoId);

		// Set the document with the provided data
		await setDoc(todoRef, todo);

		return todoId;
	} catch (error) {
		console.error("Error adding todo item:", error);
		throw error;
	}
};

// DELETE TODO ITEM
export const deleteTodoItem = async (user, todoId) => {
	try {
		const userId = user.uid;
		// Input validation

		// Create document reference using string parameters
		const todoRef = doc(db, "users", userId, "todos", todoId);

		// Delete the document
		await deleteDoc(todoRef);

		console.log("Todo deleted successfully");
	} catch (error) {
		console.error("Error in deleteTodoItem:", error);
		throw error;
	}
};

// set and get score
export const setScore = async (uid, score) => {
	if (!uid || !score) return null;

	const userRef = doc(db, "users", uid);

	try {
		await setDoc(userRef, { score }, { merge: true });
		return await getUserData(uid);
	} catch (error) {
		console.error("Error updating user document:", error);
		throw error;
	}
};

export const getscore = async (uid) => {
	if (!uid) return null;

	const userRef = doc(db, "users", uid);
	const userSnap = await getDoc(userRef);

	if (userSnap.exists()) {
		return userSnap.data().score;
	}

	return null;
};

// set and get level
export const setLevel = async (uid, level) => {
	if (!uid || !level) return null;

	const userRef = doc(db, "users", uid);

	try {
		await setDoc(userRef, { level }, { merge: true });
		return await getUserData(uid);
	} catch (error) {
		console.error("Error updating user document:", error);
		throw error;
	}
};

export const getLevel = async (uid) => {
	if (!uid) return null;

	const userRef = doc(db, "users", uid);
	const userSnap = await getDoc(userRef);

	if (userSnap.exists()) {
		return userSnap.data().level;
	}

	return null;
};

// export const updateUserData = async (uid, data) => {
// 	if (!uid || !data) return null;

// 	const userRef = doc(db, "users", uid);

// 	try {
// 		await setDoc(userRef, data, { merge: true });
// 		return await getUserData(uid);
// 	} catch (error) {
// 		console.error("Error updating user document:", error);
// 		throw error;
// 	}
// };
