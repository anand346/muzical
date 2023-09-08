import Link from "next/link";

function ModalLink({roomName}){
    return (
        <>
            <Link target="_blank"  href = {`${process.env.NEXT_PUBLIC_API_ROOT}/youtube/${roomName}`} className = {`text-muzical_primary  text-md mt-0`} >{`${process.env.NEXT_PUBLIC_API_ROOT}/youtube/${roomName}`}</Link>
        </>
    )
}

export default ModalLink;