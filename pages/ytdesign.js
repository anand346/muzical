import RoomHeader from "@/components/RoomHeader";
import RoomLeftSidebar from "@/components/RoomLeftSidebar";

function Ytpage(){

    return (
        <>
            <div className = "flex flex-col h-screen w-screen bg-muzical_secondary">
                <RoomHeader />
                <div className = "flex-1 items-center justify-between w-screen ">
                    <RoomLeftSidebar />
                </div>
                
            </div>
        </>
    )
    
}

export default Ytpage;