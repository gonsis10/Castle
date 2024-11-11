"use client";

import "./home.css";
import GoogleSignIn from "./components/GoogleSignIn";
import { useAuth } from "./context/AuthContext";
import { useRouter } from "next/navigation";
import ProgressBar from "./components/ProgressBar";
import CurrentLevel from "./components/CurrentLevel";

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
                    <div className="items-center flex-col">
                        <CurrentLevel className="flex" maxValue="20" />
                    </div>
                    <div>
                        <ProgressBar className="flex" maxValue="20" />
                    </div>
                </div>
            ) : (
                <GoogleSignIn onSignInSuccess={handleSignInSuccess} onSignInError={(error) => alert(error.message)} />
            )}
        </div>
    );
}
