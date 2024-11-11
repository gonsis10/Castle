"use client";

import "./home.css";
import GoogleSignIn from "./components/GoogleSignIn";
import { useAuth } from "./context/AuthContext";
import { useRouter } from "next/navigation";
import ProgressBar from "./components/ProgressBar";
import CurrentLevel from "./components/CurrentLevel";
import { CurrentCastle } from "./components/CurrentCastle";

export default function Home() {
	const { user, setUser } = useAuth();

	const handleSignInSuccess = (userData) => {
		setUser(userData);
		console.log(user);
	};

	return (
		<div>
			{user ? (
				<div>
					<h1>Hello {user["displayName"]}!</h1>
					<CurrentCastle />
					<div className="">
						<h2 className="items-center flex-col text-white font-extrabold">
							<CurrentLevel className="flex" maxValue="20" />
						</h2>
						<div>
							<ProgressBar className="flex" maxValue="20" />
						</div>
					</div>
				</div>
			) : (
				<GoogleSignIn onSignInSuccess={handleSignInSuccess} onSignInError={(error) => alert(error.message)} />
			)}
		</div>
	);
}
