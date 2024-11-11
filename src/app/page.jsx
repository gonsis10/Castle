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
        <div className="App">
            {user ? (
                <div className="">
                    <h1>Hello {user["displayName"]}!</h1>
                    <div>
                        <ProgressBar maxValue="20" />
                    </div>
                    <div>
                        <CurrentLevel maxValue="20" />
                    </div>

                </div>
            ) : (
                <GoogleSignIn onSignInSuccess={handleSignInSuccess} onSignInError={(error) => alert(error.message)} />
            )}
        </div>
    );
}
