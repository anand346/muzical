import React from "react";
import Image from "next/image";

export default function Room_card(){


    return (
        <>

            <div className=" first:mt-5 max-w-[300px] bg-white border border-gray-200 rounded-md shadow dark:bg-gray-800 dark:border-gray-700 p-3">
                <a href="#" className = "w-full">
                    <Image className="w-full rounded-md object-cover" width = {100} height = {100} src="/images/bg_home.png" alt="product image" />
                </a>
                <div className="px-5 pb-5">
                    <a href="#">
                        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport</h5>
                    </a>
                    
                    <div className="flex items-center justify-between">
                        <span className="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
                    </div>
                </div>
            </div>

        </>
    )
}