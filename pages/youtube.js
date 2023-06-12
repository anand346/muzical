import { useChannel } from "@ably-labs/react-hooks";
import { useState, useRef, useEffect, useCallback } from "react";
import YouTube from "react-youtube";

function YouTubePage(){

    const [link,setLink] = useState("");
    let videoCode;
    if(link.length != 0){
        videoCode = youtube_parser(link);
        console.log("video code",videoCode);
    }


    function youtube_parser(url){
        var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
        var match = url.match(regExp);
        return (match&&match[7].length==11)? match[7] : false;
    }

    const [channel, ably] = useChannel("youtube-demo", (message) => {
        console.log(message);
        // switch(message.name){

            // case "embed" : 
                

            // case "play" :
            //     var yt_iframe = document.getElementsByClassName("youtube-embed")[0];
            //     yt_iframe.contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*');

            // case "pause" :
            //     var yt_iframe = document.getElementsByClassName("youtube-embed")[0];
            //     yt_iframe.contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');

            // case "stop" :
            //     var yt_iframe = document.getElementsByClassName("youtube-embed")[0];
            //     yt_iframe.contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
            
        // }

    })

    const checkElapsedTime = (e) => {
        console.log(e.target.playerInfo.playerState);
        // const duration = e.target.getDuration();
        // const currentTime = e.target.getCurrentTime();
        // if (currentTime / duration > 0.95) {
        //     setModalIsOpen(true);
        // }
    };
    
    const opts = {
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1
        }
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
                            videoId="5Y-aYA6YLlg"
                            containerClassName="embed embed-youtube"
                            onStateChange={(e) => checkElapsedTime(e)}
                            opts={opts}
                        />
                           
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default YouTubePage;