"use client";

import GoogleSignIn from "./components/GoogleSignIn";
import { useAuth } from "./context/AuthContext";
import { useRouter } from "next/navigation";

export default function Home() {
	const { user, setUser } = useAuth();

	const handleSignInSuccess = (userData) => {
		setUser(userData);
	};

	return (
		<div>
			{user ? (
				<div>
					<div>test</div>
				</div>
			) : (
				<GoogleSignIn onSignInSuccess={handleSignInSuccess} onSignInError={(error) => alert(error.message)} />
			)}
		</div>
	);
}
