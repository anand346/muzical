import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function HomeLayout() {
   const [clicked, setClicked] = useState(false);
   const [roomName, setRoomName] = useState("");
   return (
      <>
         <div className="font-Helvetica h-screen w-screen relative flex flex-col gap-y-6 custom-conic-gradient  bg-no-repeat bg-cover md:p-8 sm:p-4 p-4">
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
               <div className="group create_room_btn cursor-pointer rounded-[10rem] py-[2px] px-[4px] md:py-[7px] md:px-[20px] transition-all duration-100 bg-muzical_secondary font-bold outline-0 hover:outline-2 hover:outline-dotted hover:outline-offset-4">
                  <a
                     href="https://github.com/anand346/muzical"
                     className="block hover:text-light py-2 pl-3 pr-4 text-muzical_grey rounded  md:border-0  md:p-0">
                     <i className="fa fa-github text-[24px]"></i>
                  </a>
               </div>
            </div>
            <section className="w-full h-full flex flex-col items-center justify-between lg:justify-between lg:flex-row md:flex-row">
               <div className="sm:w-1/2 w-full flex flex-col justify-center items-center relative z-10  p-4 ">
                  <div className="header_line mb-[20px] ">
                     <p className="text-muzical_light leading-tight font-bold lg:text-[2.6rem] md:text-[2.2rem] sm:text-[1.8rem]">
                        Let's Enjoy Music Together
                     </p>
                     <p className="text-muzical_light leading-tight md:text-[1.5rem] sm:text-[1rem] lg:text-[1.5rem]">
                        Enjoy music with your friends and loved ones at one
                        place
                     </p>
                  </div>
                  <div className="group create_room_btn cursor-pointer rounded-[10rem] py-[4px] px-[10px] md:py-[7px] md:px-[20px] bg-muzical_primary font-bold">
                     <Link
                        href={`${process.env.NEXT_PUBLIC_API_ROOT}/channels`}>
                        <p className="text-light text-[14px] md:text-[18px] ">
                           Public Rooms{" "}
                           <i className="pl-[5px] fa fa-arrow-right transition-transform ease-linear duration-75 group-hover:translate-x-1"></i>{" "}
                        </p>
                     </Link>
                  </div>
               </div>
               {/* RIGHT SIDE */}
               <div className="w-1/2 h-full grid place-items-center">
                  <div className="w-full h-full lg:h-full bg-[url('/svgs/right_side_bg.svg')] bg-contain bg-no-repeat bg-center" />
               </div>
            </section>
         </div>
      </>
   );
}
