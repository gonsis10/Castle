import "./globals.css";
import MobileNavigation from "./components/MobileNavigation";
import { AuthProvider } from "./context/AuthContext";
import ScoreWidget from "./components/ScoreWidget";
import ToggleAuthenticated from "./components/ToggleAuthenticated";

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<AuthProvider>
					<ToggleAuthenticated />
					<div>{children}</div>
				</AuthProvider>
			</body>
		</html>
	);
}
