"use client";

import GoogleSignIn from "./components/GoogleSignIn";
import { useAuth } from "./context/AuthContext";
import { useRouter } from "next/navigation";
import { ProgressBar } from "./components/ProgressBar";

export default function Home() {
	const { user, setUser } = useAuth();

	const handleSignInSuccess = (userData) => {
		setUser(userData);
	};

	return (
		<div>
			{user ? (
				<div className="flex justify-center self-center">
					<div>Hello {user["displayName"]}!</div>
				</div>
			) : (
				<GoogleSignIn onSignInSuccess={handleSignInSuccess} onSignInError={(error) => alert(error.message)} />
			)}
		</div>
	);
}
