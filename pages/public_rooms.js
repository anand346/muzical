import React from "react";
import Image from "next/image";
import Room_card from "@/components/RoomCard";
export default function public_rooms(){

    return (
        <>
            <div className = "w-screen flex flex-col h-screen">
                <div className = "navbar sm:p-4 p-4 flex bg-muzical_secondary_low items-center justify-between ">
                    <div className = "logo">
                        <Image src = "/images/logo.png" alt="Muzical Logo" height={100} width={100} className = "w-[5rem] md:w-[7rem] " />
                    </div>
                    <div className = "public_room_navigation cursor-pointer flex items-center justify-evenly font-bold space-x-5">
                        <i className = "fa fa-home md:text-[30px] text-[24px] text-muzical_grey"></i>
                        <i className = "fa fa-github md:text-[30px] text-[24px] text-muzical_grey"></i>
                    </div>
                </div>
                <div className = "w-full flex flex-col flex-grow bg-muzical_secondary sm:p-4 p-4">

                    <div className = "public_rooms_title flex flex-row mb-[50px] ">
                        <div className = "lg:basis-[43%] lg:block hidden"></div>
                        <div className = "flex flex-row items-center justify-between lg:basis-[57%] w-full">
                            <p className = "text-muzical_primary font-bold sm:text-[24px] text-[18px] text-clip overflow-hidden ">All Public Rooms</p>
                            <div className="relative w-[35%]">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg aria-hidden="true" className="w-5 h-5 text-muzical_grey" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                                </div>
                                {/* <input type="text" id="simple-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 " placeholder="Search Rooms"/> */}
                                <input type="text" id="roomName" className=" placeholder-muzical_grey sm:pl-10 pl-10 focus:bg-muzical_secondary_high bg-transparent placeholder-muzical_secondary_low border border-muzical_primary text-muzical_primary text-sm sm:text-md rounded-lg focus:ring-muzical_primary focus:border-muzical_primary block w-full sm:p-1.5 p-0.5" placeholder="Search Room..." />
                            </div>
                        </div>  
                    </div>
                    <div className = " public_rooms_list flex flex-grow flex-wrap w-full items-center justify-center space-x-5 space-y-5">
                        <Room_card />
                        <Room_card />
                        <Room_card />
                        <Room_card />
                        <Room_card />
                        <Room_card />
                        <Room_card />
                        <Room_card />
                        <Room_card />
                        <Room_card />
                        <Room_card />
                        <Room_card />
                        <Room_card />
                        <Room_card />
                        <Room_card />
                        
                    </div>                    
                </div>
            </div>
        </>
    )

}