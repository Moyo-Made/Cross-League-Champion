import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
	title: "Cross League Champions",
	description: "Champion the Cross-League Fantasy Revolution!",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className="new-amsterdam-regular">
				<div
					className="min-h-screen bg-cover bg-center bg-fixed"
					style={{ backgroundImage: "url('/arenasss.jpg')" }}
				>
					<Navbar />
					{children}
				</div>
			</body>
		</html>
	);
}
