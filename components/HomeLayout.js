import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function HomeLayout() {
	const [clicked, setClicked] = useState(false);
	const [roomName, setRoomName] = useState("");
	return (
		<>
			<div className="font-Helvetica h-screen w-screen relative flex flex-col gap-y-2  bg-[url('/images/bg_home.jpg')] bg-cover md:p-8 sm:p-4 p-4">
				<div className="navbar w-full flex items-center justify-between">
					<div className="logo">
						<Image
							src="/images/logo.png"
							alt="Muzical Logo"
							height={100}
							width={100}
							className="w-[5rem] md:w-[7rem] "
						/>
					</div>
					<div className="create_room_btn cursor-pointer rounded-[10rem] py-[2px] px-[4px] md:py-[7px] md:px-[20px] bg-muzical_secondary font-bold">
						<a
							href="https://github.com/anand346/muzical"
							className="block hover:text-muzical_primary py-2 pl-3 pr-4 text-muzical_grey rounded  md:border-0  md:p-0">
							<i className="fa fa-github text-[24px]"></i>
						</a>
					</div>
				</div>
				<section className="w-full h-full flex  items-center justify-center">
					<div className="w-[50%] h-full flex flex-col justify-center items-center bg-red-900">
						<div className="header_line mb-[20px] ">
							<p className="text-muzical_black text-[28px] md:text-[3.2rem] font-bold">
								Let's Enjoy Music Together
							</p>
							<p className="text-muzical_black text-[14px] md:text-[24px] ">
								Enjoy music with your friends and loved ones at one
								place
							</p>
						</div>
						<div className="create_room_btn cursor-pointer rounded-[10rem] py-[4px] px-[10px] md:py-[7px] md:px-[20px] bg-muzical_secondary font-bold">
							<Link
								href={`${process.env.NEXT_PUBLIC_API_ROOT}/channels`}>
								<p className="text-muzical_primary text-[12px] md:text-[14px] ">
									Public Rooms{" "}
									<i className="pl-[5px] fa fa-arrow-right"></i>{" "}
								</p>
							</Link>
						</div>
					</div>
					<div className="w-[50%] h-full bg-gray-900">
						<div className="w-full h-full bg-[url('/svgs/right_side_bg.svg')] bg-fit bg-no-repeat bg-center" />
					</div>
				</section>
			</div>
		</>
	);
}
