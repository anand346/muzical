import React from "react";
import Image from "next/image";
import ChannelCard from "@/components/ChannelCard";
import RoomHeader from "@/components/RoomHeader";
import { useState } from "react";
export default function Channels(){

    const channel_list = [
        {
            name : "First",
            link : `${process.env.NEXT_PUBLIC_API_ROOT}/channel/first`,
            image : `${process.env.NEXT_PUBLIC_API_ROOT}/images/channel_first.jpg`
        },
        {
            name : "Second",
            link : `${process.env.NEXT_PUBLIC_API_ROOT}/channel/second`,
            image : `${process.env.NEXT_PUBLIC_API_ROOT}/images/channel_second.jpg`
        },
        {
            name : "Third",
            link : `${process.env.NEXT_PUBLIC_API_ROOT}/channel/third`,
            image : `${process.env.NEXT_PUBLIC_API_ROOT}/images/channel_third.jpg`
        },
        {
            name : "Fourth",
            link : `${process.env.NEXT_PUBLIC_API_ROOT}/channel/fourth`,
            image : `${process.env.NEXT_PUBLIC_API_ROOT}/images/channel_fourth.jpg`
        }
    ];

    const [searchChannel,setSearchChannel] = useState("");

    return (
        <>
            <div className = "w-screen flex flex-col h-screen">
                <RoomHeader />
                <div className = "w-full flex flex-col flex-grow bg-muzical_secondary sm:p-4 p-4">
                    <div className = "public_rooms_title flex flex-row mb-[50px] ">
                        <div className = "lg:basis-[43%] lg:block hidden"></div>
                        <div className = "flex flex-row items-center justify-between lg:basis-[57%] w-full">
                            <p className = "text-muzical_primary font-bold sm:text-[24px] text-[18px] text-clip overflow-hidden ">All Public Rooms</p>
                            {/* <div className="relative w-[35%]">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg aria-hidden="true" className="w-5 h-5 text-muzical_grey" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                                </div>
                                <input value={searchChannel} onChange={(e) => setSearchChannel(e.target.value)}  type="text" id="roomName" className=" placeholder-muzical_grey sm:pl-10 pl-10 focus:bg-muzical_secondary_high bg-transparent placeholder-muzical_secondary_low border border-muzical_primary text-muzical_primary text-sm sm:text-md rounded-lg focus:ring-muzical_primary focus:border-muzical_primary block w-full sm:p-1.5 p-0.5" placeholder="Search Room..." />
                            </div> */}
                        </div>  
                    </div>
                    <div className = " public_rooms_list flex flex-grow flex-wrap w-full items-start justify-center space-x-5 space-y-5">
                    {
                        channel_list.map(channel => {
                            return (
                                <ChannelCard channel={channel} />
                            )   
                        })
                    }
                    </div>                    
                </div>
            </div>
        </>
    )

}