import { useState } from "react";

function ModalForm({setClicked,roomName,setRoomName}){


    return (
        <>
            <form className = "flex flex-col space-y-5">
                <div>
                    <label htmlFor="roomName" className="block mb-2 text-sm sm:text-lg font-medium text-muzical_primary">Room Name</label>
                    <input type="text" id="roomName" value = {roomName} onChange = {(e) => setRoomName(e.target.value)} className="focus:bg-muzical_secondary_high bg-transparent placeholder-muzical_secondary_low border border-muzical_primary text-muzical_primary text-sm sm:text-lg rounded-lg focus:ring-muzical_primary focus:border-muzical_primary block w-full p-2.5 " placeholder="My Room..." required />
                </div>
                {/* <div className = {`${visible ? "block" : "hidden"}`}>
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
                </div> */}
                <button type="submit" onClick = {() => setClicked(prev => !prev)} disabled={roomName.length <= 3 ? "disabled" : ""}  className={`disabled:text-muzical_grey disabled:border-muzical_grey  text-muzical_primary bg-transparent border border-muzical_primary hover:bg-muzical_secondary_high focus:ring-muzical_primary font-medium rounded-lg text-sm sm:text-lg w-full sm:w-auto px-3 py-1.5 sm:px-5 sm:py-2.5 text-center `} >Create Room <i className = {`${roomName.length <= 3 ? "text-muzical_grey" : "text-muzical_primary"} fa fa-arrow-right ml-2`}></i></button>
            </form>
        </>
    )
}


export default ModalForm;