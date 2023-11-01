import React from "react";
import Image from "next/image";

export default function ChannelCard({ channel }) {
	return (
		<>
			<div className="relative group1 first:mt-5 min-w-[200px] bg-muzical_secondary_low rounded-md p-2 flex flex-col gap-y-4 justify-between transition-all dur-400 items-center hover:scale-105 hover:ring hover:ring-offset-3 ring-[#FF4057aa]">
				<h3 className="text-xl font-semibold tracking-tight  px-5 py-1 rounded-lg text-muzical_grey absolute top-[-20px] bg-muzical_primary group-1-hover:bg-red ">
					{channel.name}
				</h3>
				<a
					href="#"
					className="w-full mt-10 bg-red-300 rounded-md overflow-hidden">
					<Image
						className="w-[100%] "
						width={100}
						height={100}
						src={`${channel.image}`}
						alt="product image"
					/>
				</a>
				<div className="group flex flex-col justify-end items-center w-full">
					<div className="flex w-full  items-center justify-between">
						<a href={`${channel.link}`} className="w-full">
							<span className="text-md block text-center w-full text-muzical_primary px-2 py-1 rounded-md transition-colors duration-400 ease-linear bg-muzical_secondary group-hover:bg-muzical_grey group-hover:bg-opacity-10 group-hover:backdrop-blur-lg border border-[transparent] group-hover:border-muzical_grey">
								Join
							</span>
						</a>
					</div>
				</div>
			</div>
		</>
	);
}
