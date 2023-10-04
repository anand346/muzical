import React from "react";
import Image from "next/image";

export default function ChannelCard({ channel }) {


    return (
        <>

            <div className=" first:mt-5 min-w-[200px] bg-muzical_secondary_low hover:bg-muzical_secondary_high rounded-md p-2">
                <a href="#" className="w-full  ">
                    <Image className="w-full mb-4 rounded-md object-cover" width={100} height={100} src={`${channel.image}`} alt="product image" />
                </a>
                <div className="flex flex-col justify-end items-center w-full">
                    <h3 className="text-xl font-semibold tracking-tight text-muzical_primary mb-8">{channel.name}</h3>
                    <div className="flex w-full items-center justify-between">
                        <a href={`${channel.link}`} className="w-full" >
                            <span className="text-md block text-center w-full text-muzical_primary px-2 py-1 rounded-md bg-muzical_secondary">Join</span>
                        </a>
                    </div>
                </div>
            </div>

        </>
    )
}