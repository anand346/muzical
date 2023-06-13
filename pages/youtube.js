import { useChannel } from "@ably-labs/react-hooks";
import { useState, useRef, useEffect, useCallback } from "react";
import YouTube , {YouTubePlayer} from "react-youtube";

function YouTubePage(){

    const [link,setLink] = useState("");
    const [videoCode , setVideoCode] = useState("5Y-aYA6YLlg");
    const [videoElement,setVideoElement] = useState(null);

    const opts = {
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1
        }
    };

    // useEffect(() => {
    //     if (videoElement) {
    //         // get current time
    //         const elapsed_seconds = videoElement.target.getCurrentTime();
      
    //         // calculations
    //         const elapsed_milliseconds = Math.floor(elapsed_seconds * 1000);
    //         const ms = elapsed_milliseconds % 1000;
    //         const min = Math.floor(elapsed_milliseconds / 60000);
    //         const seconds = Math.floor((elapsed_milliseconds - min * 60000) / 1000);
      
    //         const formattedCurrentTime =
    //           min.toString().padStart(2, "0") +
    //           ":" +
    //           seconds.toString().padStart(2, "0") +
    //           ":" +
    //           ms.toString().padStart(3, "0");
      
    //         console.log(formattedCurrentTime);
      
    //         // Pause and Play video
    //         if (isPaused) {
    //           videoElement.target.pauseVideo();
    //         } else {
    //           videoElement.target.playVideo();
    //         }
    //       }
    // },[isPaused, videoElement])


    function youtube_parser(url){
        var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
        var match = url.match(regExp);
        return (match&&match[7].length==11)? match[7] : false;
    }

    function playVideo(){
        if(videoElement){
            console.log("play video logged",videoElement);
            videoElement.target.playVideo();
        }
    }
    function pauseVideo(){
        if(videoElement){
            console.log("pause video logged",videoElement);
            videoElement.target.pauseVideo();
        }
    }

    const [channel, ably] = useChannel("youtube-demo", (message) => {
        console.log(message);
        switch(message.name){

            case "embed" : 
                setVideoCode(youtube_parser(message.data));

            case "play" :
                playVideo()

            case "pause" :
                pauseVideo()

            // case "stop" :
            //     var yt_iframe = document.getElementsByClassName("youtube-embed")[0];
            //     yt_iframe.contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
            
        }

    })

    const handleYoutubeStateChange = (e) => {
        var state = e.target.playerInfo.playerState;
        if(state == 1){
            channel.publish({name : "play" ,data : "play"})
        }else if(state == 2){
            channel.publish({name : "pause" ,data : "pause"})
        }
        // const duration = e.target.getDuration();
        // const currentTime = e.target.getCurrentTime();
        // if (currentTime / duration > 0.95) {
        //     setModalIsOpen(true);
        // }
    };
    
    const _onReady = (event) => {
        event.target.pauseVideo();
        setVideoElement(event) ;
    };

    const embedHandler = () => {
        // console.log(link);   
        channel.publish({name : "embed" , data : link})
    }
    return (
        <> 
            <div className = "w-full h-screen flex flex-col justify-center items-center bg-youtube_dark">
                {/* <p className = "room_name">{roomName}</p> */}

                <div className = "main flex flex-col">
                    <div className = "link_area flex flex-row mb-5">
                        <input className ="h-[30px] w-[300px] rounded-lg" placeholder="enter youtube video link..." type = "text" value = {link} onChange = {(e) => setLink(e.target.value)} />
                        <button onClick = {embedHandler} >embed</button>
                    </div>
                    <div className = "embed_div" >
                        
                           
                        <YouTube
                            videoId={videoCode}
                            containerClassName="embed embed-youtube"
                            onStateChange={handleYoutubeStateChange}
                            onReady={_onReady}
                            opts={opts}
                        />
                           
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default YouTubePage;