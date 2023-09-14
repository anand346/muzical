import RoomHeader from "@/components/RoomHeader";
import RoomLeftSidebar from "@/components/RoomLeftSidebar";
import RoomVideoBlock from "@/components/RoomVideoBlock";

function Ytpage(){

    return (
        <>
            <div className = "flex flex-col h-screen w-screen bg-muzical_secondary">
                <RoomHeader />
                <div className = "h-[87%] flex justify-center w-screen ">
                    {/* <RoomLeftSidebar /> */}
                    <RoomVideoBlock />
                </div>
                
            </div>
        </>
    )
    
}

export default Ytpage;