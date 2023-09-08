function RoomLeftSidebar(){

    return (
        <>
            <div className = "w-3/12 flex flex-col bg-muzical_secondary border-muzical_grey border-r-[1px] ">
                <div class="relative w-full pl-4 pr-4 bg-muzical_secondary_low h-14 flex items-center justify-center">
                    <div class="absolute inset-y-0 left-0 flex items-center pl-7 pointer-events-none">
                        <i className = "fa fa-search text-muzical_primary w-4 h-4"></i>
                    </div>
                    <input type="text" id="voice-search" class="bg-muzical_secondary h-8 text-muzical_primary text-sm rounded-md focus:ring-muzical_primary focus:border-muzical_primary border-none placeholder:text-muzical_primary block w-full pl-10 p-2.5 " placeholder="Search Peoples..." />
                </div>
            </div>
        </>
    )
}

export default RoomLeftSidebar