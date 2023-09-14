import Image from "next/image";
function VideoList({videoInfo,embedHandler}){

    return (
        <>
            <div className="w-full h-[calc(100% - 60px)] flex flex-col justify-start items-start overflow-scroll no-scrollbar ">

                {
                    videoInfo.map(video => {
                        return (
                            <div key={video.videoID} onClick={(e) => embedHandler(e,video.videoID)}  className = " cursor-pointer videoList_component bg-muzical_secondary_low p-2  md:p-4 mb-4 rounded-md  w-full h-[150px] flex items-center justify-start">
                                <div className = "videoThumbnail relative h-[95px] mr-2 md:mr-8 w-6/12 sm:w-4/12 overflow-hidden rounded-md" >
                                    <img src={`${video.videoThumbnail.url}`} className="absolute  object-cover h-[100%]" />
                                </div>
                                <div className = "videoDetails flex flex-col w-6/12 sm:w-8/12 h-full justify-start items-start">
                                    <p className="videoTitle w-full text-muzical_primary truncate overflow-hidden text-xl m-0 p-0 mb-1" >{video.videoTitle}</p>
                                    <p className = "channelName w-full text-muzical_grey text-lg m-0 p-0 mb-1" >{video.channelTitle}</p>
                                    <p className ="videoDesc w-full truncate overflow-hidden " >{video.videoDesc}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            

        </>
    )
}

export default VideoList;