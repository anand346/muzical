import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ModalForm from "./ModalForm";
import ModalLink from "./ModalLink";


export default function HomeLayout(){

    const [clicked,setClicked] = useState(false);
    const [roomName,setRoomName] = useState("");
    return (
        <>
            <div className = "font-Helvetica h-screen relative w-screen bg-[url('/images/bg_home.png')] bg-cover md:p-8 sm:p-4 p-4">
                <div className = "navbar w-full flex items-center justify-between md:mb-[50px] mb-[100px]">
                    <div className = "logo">
                        <Image src = "/images/logo.png" alt="Muzical Logo" height={100} width={100} className = "w-[5rem] md:w-[7rem] " />
                    </div>
                    <div className = "create_room_btn cursor-pointer rounded-[10rem] py-[4px] px-[10px] md:py-[7px] md:px-[20px] bg-muzical_secondary font-bold">
                        <Link href="/public_rooms"><p className = "text-muzical_primary text-[12px] md:text-[14px] " >Public Rooms <i className = "pl-[5px] fa fa-arrow-right"></i> </p></Link>
                    </div>
                </div>
                <section className = "w-full flex flex-col items-center justify-center">
                    <div className = "header_line mb-[20px] text-center">
                        <p className = "text-muzical_black text-[28px] md:text-[3rem]  font-bold">Let's Enjoy Music Together</p>
                        <p className = "text-muzical_black text-[14px] md:text-[24px] text-center">Enjoy music with your friends and loved ones at one place</p>
                    </div>
                    <div className = "explore_rooms_btn cursor-pointer px-[20px] py-[5px] bg-[#fff] rounded-[10rem]">
                        <p className = " text-[12px] md:text-[18px] text-muzical_black font-bold" data-modal-toggle="createRoomModal"><i className = "text-dark fa fa-plus pr-[5px]"></i> Create Room</p>
                    </div>

                    {/* <!-- Main modal --> */}
                    <div id="createRoomModal" tabIndex="-1" aria-hidden="true" className="  fixed z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
                        <div className="relative rounded-lg mt-[40px] md:mt-0 w-full max-w-sm max-h-full bg-muzical_secondary">
                            {/* <!-- Modal content --> */}
                            <div className="relative rounded-lg shadow ">
                                {/* <!-- Modal header --> */}
                                <div className="flex items-start justify-between p-4 rounded-t ">
                                    <h3 className="text-md sm:text-xl text-muzical_primary">
                                        {
                                            clicked 
                                            ? 
                                            <svg onClick={() => setClicked(prev => !prev)} class={`cursor-pointer`}  xmlns="http://www.w3.org/2000/svg" fill={'#ff4057'}  height="1em" viewBox="0 0 448 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>
                                            : "Create Your Room"
                                        }
                                    </h3>
                                    <button type="button" className="bg-muzical_secondary text-gray-400 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle = "createRoomModal">
                                        <svg aria-hidden="true" className="w-4 sm:w-5 sm:h-5 bg-muzical_secondary" fill="bg-muzical_secondary" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill = "#ff4057" fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" style = {{fill : "#ff4057"}}></path></svg>
                                    </button>
                                </div>
                                {/* <!-- Modal body --> */}
                                <div className={`p-6 ${clicked ? "pt-0 text-center" : ""}`}>
                                    {
                                        clicked ? <ModalLink roomName = {roomName} /> : (
                                        <ModalForm roomName = {roomName} setRoomName = {setRoomName} setClicked = {setClicked} />
                                        )
                                    }
                                    
                                    
                                </div>
                                
                            </div>
                        </div>
                    </div>

                </section>
            </div>

        </>
    )
}