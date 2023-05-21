import Image from "next/image";
import { useState } from "react";

export default function HomeLayout(){

    const [visible,setVisible] = useState(true);

    return (
        <>
            <div className = "font-Helvetica h-screen relative w-screen bg-[url('/images/bg_home.png')] bg-cover md:p-8 sm:p-4 p-4">
                <div className = "navbar w-full flex items-center justify-between md:mb-[50px] mb-[100px]">
                    <div className = "logo">
                        <Image src = "/images/logo.png" alt="Muzical Logo" height={100} width={100} className = "w-[5rem] md:w-[7rem] " />
                    </div>
                    <div className = "create_room_btn cursor-pointer rounded-[10rem] py-[4px] px-[10px] md:py-[7px] md:px-[20px] bg-muzical_secondary font-bold">
                        <p className = "text-muzical_primary text-[12px] md:text-[14px] "  data-modal-toggle="createRoomModal" ><i className = "text-[#fff] fa fa-plus pr-[5px]"></i> Create Room</p>
                    </div>
                </div>
                <section className = "w-full flex flex-col items-center justify-center">
                    <div className = "header_line mb-[80px] text-center">
                        <p className = "text-muzical_black text-[28px] md:text-[3rem]  font-bold">Let's Enjoy Music Together</p>
                        <p className = "text-muzical_black text-[14px] md:text-[24px] text-center">Enjoy music with your friends and loved ones at one place</p>
                    </div>
                    <div className = "explore_rooms_btn cursor-pointer px-[20px] py-[5px] bg-[#fff] rounded-[10rem]">
                        <p className = " text-[12px] md:text-[18px] text-muzical_black font-bold">Public Rooms <i className = "pl-[5px] fa fa-arrow-right"></i> </p>
                    </div>

                    {/* <!-- Main modal --> */}
                    <div id="createRoomModal" tabIndex="-1" aria-hidden="true" className="  fixed z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
                        <div className="relative rounded-lg mt-[40px] md:mt-0 w-full max-w-sm max-h-full bg-muzical_secondary">
                            {/* <!-- Modal content --> */}
                            <div className="relative rounded-lg shadow ">
                                {/* <!-- Modal header --> */}
                                <div className="flex items-start justify-between p-4 rounded-t ">
                                    <h3 className="text-md sm:text-xl text-muzical_primary">
                                        Create Your Room
                                    </h3>
                                    <button type="button" className="bg-muzical_secondary text-gray-400 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle = "createRoomModal">
                                        <svg aria-hidden="true" className="w-4 sm:w-5 sm:h-5 bg-muzical_secondary" fill="bg-muzical_secondary" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill = "#ff4057" fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" style = {{fill : "#ff4057"}}></path></svg>
                                    </button>
                                </div>
                                {/* <!-- Modal body --> */}
                                <div className="p-6">
                                    
                                    <form className = "flex flex-col space-y-5">
                                        <div>
                                            <label htmlFor="roomName" className="block mb-2 text-sm sm:text-lg font-medium text-muzical_primary">Room Name</label>
                                            <input type="text" id="roomName" className="focus:bg-muzical_secondary_high bg-transparent placeholder-muzical_secondary_low border border-muzical_primary text-muzical_primary text-sm sm:text-lg rounded-lg focus:ring-muzical_primary focus:border-muzical_primary block w-full p-2.5 " placeholder="My Room..." required />
                                        </div>
                                        <div className = {`${visible ? "block" : "hidden"}`}>
                                            <label htmlFor="password" className="block mb-2 text-sm sm:text-lg font-medium text-muzical_primary">Password</label>
                                            <input type="password" id="password" className="focus:bg-muzical_secondary_high bg-transparent placeholder-muzical_secondary_low border border-muzical_primary text-muzical_primary text-sm sm:text-lg rounded-lg focus:ring-muzical_primary focus:border-muzical_primary block w-full p-2.5 " placeholder = "password..." required />
                                        </div>
                                        <div className = {`${visible ? "block" : "hidden"}`}>
                                            <label htmlFor="confirmPassword" className="block mb-2 text-sm sm:text-lg font-medium text-muzical_primary">Confirm Password</label>
                                            <input type="password" id="confirmPassword" className="focus:bg-muzical_secondary_high bg-transparent placeholder-muzical_secondary_low border border-muzical_primary text-muzical_primary text-sm sm:text-lg rounded-lg focus:ring-muzical_primary focus:border-muzical_primary block w-full p-2.5 " placeholder = "password again..." required />
                                        </div>
                                        <div className="flex items-center">
                                            <div className="flex items-center">
                                                <input id="remember" onChange = {(e) => setVisible(!visible)} type="checkbox" value="" className="w-4 h-4 focus:ring-muzical_primary focus:border-muzical_primary border border-muzical_primary bg-transparent text-muzical_primary rounded text-sm sm:text-lg" required />
                                            </div>
                                            <label htmlFor="remember" className="ml-2 text-sm sm:text-lg font-medium text-muzical_primary ">Public Room</label>
                                        </div>
                                        <button type="submit" className="text-muzical_primary bg-transparent border border-muzical_primary hover:bg-muzical_secondary_high focus:ring-muzical_primary font-medium rounded-lg text-sm sm:text-lg w-full sm:w-auto px-3 py-1.5 sm:px-5 sm:py-2.5 text-center ">Create Room <i className = "fa fa-arrow-right ml-2 text-muzical_primary"></i></button>
                                    </form>
                                </div>
                                
                            </div>
                        </div>
                    </div>

                </section>
            </div>

        </>
    )
}