"use client";

import GoogleSignIn from "./components/GoogleSignIn";
import { useAuth } from "./context/AuthContext";
import { useRouter } from "next/navigation";
import ProgressBar from "./components/ProgressBar";

export default function Home() {
	const { user, setUser } = useAuth();

	const handleSignInSuccess = (userData) => {
		setUser(userData);
	};

	return (
		<div>
			{user ? (
				<div className="justify-content justify-center self-center">
					<div className="flex">Hello {user["displayName"]}!</div>
                    
                    <div className="flex"> 
                        <ProgressBar currentValue={user["score"]} maxValue="25" color="black" />
                    </div>
                    
				</div>
			) : (
				<GoogleSignIn onSignInSuccess={handleSignInSuccess} onSignInError={(error) => alert(error.message)} />
			)}
		</div>
	);
}
