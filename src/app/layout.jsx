import localFont from "next/font/local";
import "./globals.css";
import MobileNavigation from "./components/MobileNavigation";

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<MobileNavigation />
				<div>{children}</div>
			</body>
		</html>
	);
}
