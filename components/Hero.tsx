"use client";

import Image from "next/image";
import Lewy from "@/public/lewy.png";
import Halaand from "@/public/erling.png";
import Lineup from "@/public/lineup.png";
import { useRouter } from "next/navigation";
import Modal from "./Modal";
import Link from "next/link";
import { useState } from "react";
import SignUpLogin from "./SignUpLogin";
import { toast } from "react-toastify";

const Hero = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const router = useRouter();

	const handleBuildTeamClick = () => {
		// Check if user is logged in (you'll need to implement this check)
		const isLoggedIn = false; // Replace with actual check

		if (isLoggedIn) {
			router.push("/create-team");
		} else {
			setIsModalOpen(true);
		}
	};

	const handleLoginSuccess = () => {
		setIsModalOpen(false);
		router.push("/create-team");
		toast.success("Welcome aboard! Let's start building your dream team.");
	};
	return (
		<section>
			<div className="flex gap-[25rem]">
				<div>
					<Image
						src={Halaand}
						alt="Halaand"
						className=""
						width={500}
						height={600}
					/>
				</div>

				<div>
					<Image src={Lewy} alt="lewy" className="" width={500} height={600} />
				</div>
			</div>

			<div className="flex justify-center text-center">
				<div className="md:-mt-[32rem] text-white">
					<h1 className="font-normal md:text-[4rem] text-[5rem]">
						Champion the Cross-League <br /> Fantasy Revolution!
					</h1>

					<p className="mukta-regular md:text-[20px] text-[22px]">
						Assemble the best of Premier League and La Liga <br />
						into one unstoppable fantasy team.
					</p>

					<button
						onClick={handleBuildTeamClick}
						className="bg-[#292929] rounded-md px-5 py-3 mt-3 text-[18px] hover:scale-110 ease-in duration-300"
					>
						<div className="flex gap-2">
							<Link href="/my-team">Build Your Dream Team!</Link>
							<Image src={Lineup} alt="line-up icon" width={25} height={15} />
						</div>
					</button>
				</div>
			</div>

			<Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
				<SignUpLogin onSuccess={handleLoginSuccess} />
			</Modal>
		</section>
	);
};

export default Hero;
