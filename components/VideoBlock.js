import YouTube , {YouTubePlayer} from "react-youtube";


function VideoBlock({selectedVideoID,playVideo,pauseVideo,setVideoElement}){


    const opts = {
        height: '350',
        width: '630',
        playerVars: {
            autoplay: 1
        }
    };

    const _onReady = (event) => {
        event.target.pauseVideo();
        setVideoElement(event);
    };


    
    
    return (
        <>
            <div className = "rounded-md bg-muzical_secondary_low h-80 mb-[40px]">
                <YouTube
                    videoId={selectedVideoID}
                    containerClassName="embed embed-youtube"
                    onReady={_onReady}
                    opts={opts}
                />
            </div>
            <div className = "player_controller rounded-md flex flex-row w-full justify-center items-center bg-muzical_secondary_low p-2 space-x-4">
                        <button onClick={() => playVideo()} className = "rounded-md  w-[80px] bg-muzical_grey " >play</button>
                        <button onClick={() => pauseVideo()} className = "rounded-md  w-[80px] bg-muzical_grey" >pause</button>
            </div>
            {/* <div className = "flex items-center justify-between hidden md:flex">
                <div className ="h-[100px] rounded-md bg-muzical_secondary_low w-3/12"></div>
                <div className ="h-[100px] rounded-md bg-muzical_secondary_low w-3/12"></div>
                <div className ="h-[100px] rounded-md bg-muzical_secondary_low w-3/12"></div>
            </div>  */}
        </>
    )
}

export default VideoBlock;