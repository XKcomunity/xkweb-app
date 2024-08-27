import "./globals.scss";
import { NavBar } from "@/components/statefull/navbar/NavBar";
import { Footer } from "@/components/stateless/footer/Footer";
import ScrollTopButton from "@/components/statefull/buttons/ScrollTopButton";
import React from "react";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="es">
			{/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
			<head />

			<body>
				<NavBar />
				<ScrollTopButton />
				{children}
				<Footer />
			</body>
		</html>
	);
}
