import { useChannel } from "@ably-labs/react-hooks";
import { useState, useRef, useEffect, useCallback } from "react";
import YouTube , {YouTubePlayer} from "react-youtube";
import RoomHeader from "@/components/RoomHeader";
import VideoList from "@/components/VideoList";
import youtubeAPI from "@/youtubeAPI/youtubeAPI";

let videoElement;
function YouTubePage(){

    const [link,setLink] = useState("");
    const [videoCode , setVideoCode] = useState("");
    const [videoMetaInfo,setVideoMetaInfo] = useState([]);
    const [videoTitle,setVideoTitle] = useState("");

    const opts = {
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1
        }
    };

    async function getData(e=null,vTitle){
        if(e != null){
            e.preventDefault();
        }
        if(vTitle.length <= 0){
            vTitle = "hello";
        }
        
        setVideoCode("");

        const response = await youtubeAPI.get("/search",{
            params : {
                q: vTitle
            }
        })

        const videoObj = response.data.items.map(item => (
                {
                    videoID : item.id.videoId,
                    videoTitle :item.snippet.title,
                    channelTitle : item.snippet.channelTitle,
                    videoDesc : item.snippet.description,
                    videoThumbnail : item.snippet.thumbnails.medium,
                }
            )
        )

        setVideoMetaInfo(videoObj);
    }

    useEffect(() => {
        getData(null,"hello");
        // if (videoElement) {
        //     // get current time
        //     const elapsed_seconds = videoElement.target.getCurrentTime();
      
        //     // calculations
        //     const elapsed_milliseconds = Math.floor(elapsed_seconds * 1000);
        //     const ms = elapsed_milliseconds % 1000;
        //     const min = Math.floor(elapsed_milliseconds / 60000);
        //     const seconds = Math.floor((elapsed_milliseconds - min * 60000) / 1000);
      
        //     const formattedCurrentTime =
        //       min.toString().padStart(2, "0") +
        //       ":" +
        //       seconds.toString().padStart(2, "0") +
        //       ":" +
        //       ms.toString().padStart(3, "0");
      
        //     console.log(formattedCurrentTime);
      
        //     // Pause and Play video
        //     if (isPaused) {
        //       videoElement.target.pauseVideo();
        //     } else {
        //       videoElement.target.playVideo();
        //     }
        //   }
    },[])


    function youtube_parser(url){
        var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
        var match = url.match(regExp);
        return (match&&match[7].length==11)? match[7] : false;
    }

    function playVideo(){
        if(videoElement){
            if(videoElement.target.playerInfo.playerState != 1){
                console.log("play video logged",videoElement);
                console.log(videoElement.target.getCurrentTime());
                var currTime = videoElement.target.getCurrentTime();
                videoElement.target.playVideo();
                channel.publish({name : "play" ,data : {time : Math.floor(currTime)}})
            }
        }
    }
    function _playVideo(currTime){
        if(videoElement){
            if(videoElement.target.playerInfo.playerState != 1){
                videoElement.target.seekTo(currTime);
                videoElement.target.playVideo();
            }
        }
    }
    function pauseVideo(){
        if(videoElement){
            if(videoElement.target.playerInfo.playerState != 2){
                console.log("pause video logged",videoElement);
                console.log(videoElement.target.getCurrentTime());
                var currTime = videoElement.target.getCurrentTime();
                videoElement.target.pauseVideo();
                channel.publish({name : "pause" ,data : {time : Math.floor(currTime)}})
            }
        }
    }
    function _pauseVideo(currTime){
        if(videoElement){
            if(videoElement.target.playerInfo.playerState != 2){
                videoElement.target.seekTo(currTime);
                videoElement.target.pauseVideo();
            }
        }
    }

    const [channel, ably] = useChannel("first", (message) => {
        console.log(message);
        switch(message.name){

            case "embed" : 
                setVideoCode(message.data);

            case "play" :
                if(message.connectionId != ably.connection.id){
                    _playVideo(message.data.time);
                }

            case "pause" :
                if(message.connectionId != ably.connection.id){
                    _pauseVideo(message.data.time);
                }
            
        }

    })

    const handleYoutubeStateChange = (e) => {
        var state = e.target.playerInfo.playerState;
        // if(state == 1){
        //     channel.publish({name : "play" ,data : "play"})
        // }else if(state == 2){
        //     channel.publish({name : "pause" ,data : "pause"})
        // }
        // const duration = e.target.getDuration();
        // const currentTime = e.target.getCurrentTime();
        // if (currentTime / duration > 0.95) {
        //     setModalIsOpen(true);
        // }
    };


    
    const _onReady = (event) => {
        event.target.playVideo();
        videoElement = event ;
    };

    const embedHandler = (e,vID) => {
        e.preventDefault();
        // console.log(link);
        channel.publish({name : "embed" , data : vID})
    }
    return (
        <> 
            <div className = "flex flex-col min-h-screen h-[600px] w-screen bg-muzical_secondary">
                <RoomHeader />
                <div className = "h-[87%] flex justify-center w-screen ">
                    {/* <RoomLeftSidebar /> */}
                    {/* <RoomVideoBlock /> */}
                    <div className = "w-full h-full overflow-hidden md:w-6/12 flex flex-col bg-muzical_secondary h-full  pl-6 pr-6 ">
                        <div className = "flex justify-start items-center mb-[20px] h-[60px] ">
                            <div className="relative w-10/12 pr-4 bg-transparent h-14 flex items-center justify-center">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <i className = "fa fa-search text-muzical_primary w-4 h-4"></i>
                                </div>
                                <input type="text" value={videoTitle}  onChange = {(e) => setVideoTitle(e.target.value)}  id="voice-search" className="bg-muzical_secondary_low h-8 text-muzical_primary text-sm rounded-md focus:ring-muzical_primary focus:border-muzical_primary border-none placeholder:text-muzical_primary block w-full pl-10 p-2.5 " placeholder="Search video..." />
                            </div>
                            <button onClick = {(e) => getData(e,videoTitle)}  className = "w-2/12 min-w-fit bg-muzical_secondary_low h-8 text-muzical_primary text-sm rounded-md focus:ring-muzical_primary focus:border-muzical_primary border-none text-center pl-2.5 pr-2.5 ">Search</button>
                        </div>

                        {
                            videoCode.length > 0
                            ? (<>
                            <div className = "rounded-md bg-muzical_secondary_low h-80 mb-[40px] w-[100%] relative">
                                <YouTube
                                    videoId={videoCode}
                                    className="embed embed-youtube absolute w-[100%]"
                                    onReady={_onReady}
                                    opts={opts}
                                    iframeClassName={'w-[100%] absolute'}
                                />
                            </div>
                            <div className = "player_controller rounded-md flex flex-row w-full justify-center items-center bg-muzical_secondary_low p-2 space-x-4">
                                        <button onClick={() => playVideo()} className = "rounded-md  w-[80px] bg-muzical_grey " >play</button>
                                        <button onClick={() => pauseVideo()} className = "rounded-md  w-[80px] bg-muzical_grey" >pause</button>
                            </div>
                            </>)
                            : <VideoList videoInfo={videoMetaInfo} embedHandler={embedHandler} />
                        }
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default YouTubePage;