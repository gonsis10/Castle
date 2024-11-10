import "./globals.css";
import MobileNavigation from "./components/MobileNavigation";
import { AuthProvider } from "./context/AuthContext";

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<AuthProvider>
					<MobileNavigation />
					<div>{children}</div>
				</AuthProvider>
			</body>
		</html>
	);
}
