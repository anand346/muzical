import { useRouter } from "next/router";
import { useEffect } from "react";

export default function RoomPage(){

    const router = useRouter();


    useEffect(() => {
        if(router.query.roomName != undefined){
            console.log(router.query.roomName);
        }
    })

    return (
        <>
            <p>hello world</p>
        </>
    )
}

