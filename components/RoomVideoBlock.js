import { useState, useEffect } from "react";
import youtubeAPI from "@/youtubeAPI/youtubeAPI";
import VideoList from "./VideoList";
import VideoBlock from "./VideoBlock";
import { useChannel } from "@ably-labs/react-hooks";

function RoomVideoBlock(){

    const [selectedVideoID,setSelectedVideoID] = useState("");
    const [videoMetaInfo,setVideoMetaInfo] = useState([]);
    const [videoElement,setVideoElement] = useState(null);
    const [videoTitle,setVideoTitle] = useState("");


    async function getData(e=null,vTitle){
        if(e != null){
            e.preventDefault();
        }
        if(vTitle.length <= 0){
            vTitle = "hello";
        }
        
        setSelectedVideoID("")

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
    },[])

    // function youtube_parser(url){
    //     var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    //     var match = url.match(regExp);
    //     return (match&&match[7].length==11)? match[7] : false;
    // }

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
        console.log("come play",videoElement);
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
        console.log("come pause",videoElement);
        if(videoElement){
            if(videoElement.target.playerInfo.playerState != 2){
                videoElement.target.seekTo(currTime);
                videoElement.target.pauseVideo();
            }
        }
    }

    const [channel, ably] = useChannel("youtube-demo", (message) => {
        console.log(message);
        switch(message.name){

            case "embed" : 
                setSelectedVideoID(message.data);

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

    const embedHandler = (videoID) => {
        // console.log(link);   
        channel.publish({name : "embed" , data : videoID})
    }

    // const handleYoutubeStateChange = (e) => {
    //     var state = e.target.playerInfo.playerState;
    //     // if(state == 1){
    //     //     channel.publish({name : "play" ,data : "play"})
    //     // }else if(state == 2){
    //     //     channel.publish({name : "pause" ,data : "pause"})
    //     // }
    //     // const duration = e.target.getDuration();
    //     // const currentTime = e.target.getCurrentTime();
    //     // if (currentTime / duration > 0.95) {
    //     //     setModalIsOpen(true);
    //     // }
    // };

    return (
        <>
            <div className = "w-full h-full overflow-hidden md:w-6/12 flex flex-col bg-muzical_secondary h-full  pl-6 pr-6 ">
                <div className = "flex justify-start items-center mb-[20px] h-[60px] ">
                    <div className="relative w-8/12 pr-4 bg-transparent h-14 flex items-center justify-center">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <i className = "fa fa-search text-muzical_primary w-4 h-4"></i>
                        </div>
                        <input type="text" value={videoTitle}  onChange = {(e) => setVideoTitle(e.target.value)}  id="voice-search" className="bg-muzical_secondary_low h-8 text-muzical_primary text-sm rounded-md focus:ring-muzical_primary focus:border-muzical_primary border-none placeholder:text-muzical_primary block w-full pl-10 p-2.5 " placeholder="Search Videos..." />
                    </div>
                    <button onClick = {(e) => getData(e,videoTitle)}  className = "w-2/12 bg-muzical_secondary_low h-8 text-muzical_primary text-sm rounded-md focus:ring-muzical_primary focus:border-muzical_primary border-none text-center pl-2.5 pr-2.5 ">Search</button>
                </div>
                
                {
                    selectedVideoID.length > 0
                    ? <VideoBlock selectedVideoID = {selectedVideoID} setVideoElement={setVideoElement}  playVideo={playVideo} pauseVideo={pauseVideo} />
                    : <VideoList videoInfo = {videoMetaInfo} embedHandler={embedHandler} /> 
                }
                
                
                
            </div>
        </>
    )
}

export default RoomVideoBlock;