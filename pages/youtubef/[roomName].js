import { useState, useRef, useEffect, useCallback } from "react";
import YouTube , {YouTubePlayer} from "react-youtube";
import { useRouter } from "next/router";
import * as Ably from 'ably';

let videoElement;
let roomName;
function YouTubePage(){

    const [link,setLink] = useState("");
    const [videoCode , setVideoCode] = useState("5Y-aYA6YLlg");
    const [channel,setChannel] = useState("");
    const router = useRouter();

    const opts = {
        playerVars: {
            autoplay: 1
        }
    };


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
                channel.publish("play" ,{time : Math.floor(currTime)})
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
                channel.publish("pause" ,{time : Math.floor(currTime)})
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

    const _onReady = (event) => {
        event.target.pauseVideo();
        videoElement = event ;
    };

    const embedHandler = () => {
        // console.log(link);   
        channel.publish("embed" , {data : link})
    }


    async function doConn(channelName){
        let conn = new Ably.Realtime.Promise("0hMeLQ.i4Hm5A:5JU04Xnof4XiecDRb-sW-MtpkeDf615-kaXuAfkuOq4");
        await conn.connection.once('connected');
        console.log('Connected to Ably!');

        const mychannel = conn.channels.get(channelName);
        setChannel(mychannel);
        console.log("state is ",channel);

        await mychannel.subscribe('embed', (message) => {
            setVideoCode(youtube_parser(message.data.data));
        });
        await mychannel.subscribe('play', (message) => {
            if(message.connectionId != message.clientId ){
                _playVideo(message.data.time);
            }
        });
        await mychannel.subscribe('pause', (message) => {
            if(message.connectionId != message.clientId ){
                _pauseVideo(message.data.time);
            }
        });
        
    }
    
    useEffect(() => {
        if(router.isReady){
            roomName = router.query.roomName;
            doConn(roomName);
            
        }


    },[videoElement,router.isReady])

    // const [channel, ably] = useChannel(roomName == undefined ? "hello-world" : roomName, (message) => {
    //     console.log(message);
    //     switch(message.name){

    //         case "embed" : 
    //             setVideoCode(youtube_parser(message.data));

    //         case "play" :
    //             if(message.connectionId != ably.connection.id){
    //                 _playVideo(message.data.time);
    //             }

    //         case "pause" :
    //             if(message.connectionId != ably.connection.id){
    //                 _pauseVideo(message.data.time);
    //             }
            
    //     }

    // })
    

    
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
                            onReady={_onReady}
                            opts={opts}
                        />
                           
                    </div>
                    <div className = "player_controller flex flex-row">
                        <button onClick={() => playVideo()} >play</button>
                        <button onClick={() => pauseVideo()} >pause</button>
                        {/* <button>stop</button> */}
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default YouTubePage;