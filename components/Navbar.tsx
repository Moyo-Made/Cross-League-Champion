"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/logo.png";
import navLinks from "@/utils/navlinks";
import { usePathname } from "next/navigation";

const Navbar: React.FC = () => {
	const [isOpen, setIsOpen] = useState(false);
	const pathname = usePathname();

	return (
		<nav className="bg-gray-300 w-[95%] md:ml-10 ml-0 rounded-lg">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-16">
					<div className="flex items-center">
						<div className="flex-shrink-0">
							<Link href="/" className="text-black text-lg font-semibold">
								<div className="flex gap-2">
									<Image
										src={Logo}
										alt="Cross-League Champion Logo"
										width={80}
										height={60}
									/>
									<p className="text-center md:text-[16px] text-[14px] mt-3 bungee-tint-regular">
										Cross-League Champions
									</p>
								</div>
							</Link>
						</div>
						<div className="hidden md:block">
							<div className="ml-[15rem] items-baseline space-x-4">
								{navLinks.map((link) => (
									<Link
										key={link.href}
										href={link.href}
										className={`text-[#000] hover:border-b-2 hover:border-red-500 rounded-md uppercase font-light px-3 py-2 text-[20px]
											${pathname === link.href ? "border-b-2 border-red-500" : ""}`}
									>
										{link.label}
									</Link>
								))}
							</div>
						</div>
					</div>
					<div className="md:hidden">
						<button
							onClick={() => setIsOpen(!isOpen)}
							className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
						>
							<span className="sr-only">Open main menu</span>
							{!isOpen ? (
								<svg
									className="block h-6 w-6"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									aria-hidden="true"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M4 6h16M4 12h16M4 18h16"
									/>
								</svg>
							) : (
								<svg
									className="block h-6 w-6"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									aria-hidden="true"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M6 18L18 6M6 6l12 12"
									/>
								</svg>
							)}
						</button>
					</div>
				</div>
			</div>

			{isOpen && (
				<div className="md:hidden">
					<div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
						{navLinks.map((link) => (
							<Link
								key={link.href}
								href={link.href}
								className="text-[#000]hover:border-b-2 hover:border-gray-800 block px-3 py-2 rounded-md text-base font-normal"
							>
								{link.label}
							</Link>
						))}
					</div>
				</div>
			)}
		</nav>
	);
};

export default Navbar;
