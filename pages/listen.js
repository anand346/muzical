import { useState, useRef, useEffect, useCallback } from "react";
// import { useChannel } from "@/components/AblyReactEffect";
import { useChannel } from "@ably-labs/react-hooks";

let socket;
var audio;
var load;
var song0;
var play;
var pause;


const Home = () => {
  
//   const [roomName, setRoomName] = useState("");
//   const [choosenRoom, setChoosenRoom] = useState("");

  audio = useRef();
  play = useRef();
  pause = useRef();
  load = useRef();
  song0 = useRef();
  
  const [channel, ably] = useChannel("chat-demo", (message) => {

    console.log(message);
    switch(message.name){
        case "song0" :
            audio.current.innerHTML = '<source src="despacito.mp3" class="audio-source">';
            load.current.click();


        case "play" : 
            audio.current.currentTime = message.data.times;

            setTimeout(function () {      
                audio.current.play()
            
                play.current.classList.remove('show');
                play.current.classList.add('hide');
                pause.current.classList.remove('hide');
                pause.current.classList.add('show');
            }, 150);

            
            
        case "pause" :
            audio.current.currentTime = message.data.times;

            setTimeout(function () {      

              audio.current.pause();
              pause.current.classList.remove('show');
              pause.current.classList.add('hide');
              play.current.classList.remove('hide');
              play.current.classList.add('show');
  
            }, 0);
            

    }
    
  });

  

  const loadedFn = useCallback(event => {
      load.current.innerHTML = 'Loaded.';
  })

  const loadingFn = useCallback(event => {
    audio.current.load();
    load.current.innerHTML = 'Loading...';
  })

  const song0Fn = useCallback(event => {
    audio.current.html('<source src="despacito.mp3" class="audio-source">');
    load.current.click();
    pause.current.click();
    channel.publish({ name : 'song0',room : "chat-demo"});
  })

  const playFn = useCallback(event => {
    console.log("current time",audio.current.currentTime);
    play.current.classList.remove('show');
    play.current.classList.add('hide');
    pause.current.classList.remove('hide');
    pause.current.classList.add('show');
    channel.publish({name : "play", data : {times: parseFloat(audio.current.currentTime) , room : "chat-demo"}});
  })

  const pauseFn = useCallback(event =>{
      console.log("pause");
      pause.current.classList.remove('show');
      pause.current.classList.add('hide');
      play.current.classList.remove('hide');
      play.current.classList.add('show');
      channel.publish({name : "pause", data : {times: audio.current.currentTime, room : "chat-demo"}});
  })

  useEffect(() => {



    audio.current.addEventListener('canplay',loadedFn,false);
    load.current.addEventListener('click',loadingFn);
    song0.current.addEventListener('click',song0Fn);
    play.current.addEventListener('click',playFn);
    pause.current.addEventListener('click',pauseFn);

    return () => {
      audio.current.removeEventListener('canplay',loadedFn);
      load.current.removeEventListener('click',loadingFn);
      song0.current.removeEventListener('click',song0Fn);
      play.current.removeEventListener('click',playFn);
      pause.current.removeEventListener('click',pauseFn);


    }
  }, [pauseFn,playFn,song0Fn,loadedFn,loadingFn]);


  return (
    <>
      <style jsx global>
        {`
          body {
            margin-left: 25%;
            background: #d86103;
            color: white;
            text-align: center;
            font-family: sans-serif;
            width: 50%;
          }
          .fa {
            color: white;
            font-size: 150px;
            cursor: pointer;
          }
          .fa-play-circle {
          }
          .hide {
            display: none;
          }
          .show {
            display: block;
          }
          ul li {
            list-style: none;
            display: inline-block;
            padding: 10px 20px;
            border: 1px solid white;
            cursor: pointer;
          }
        `}
      </style>
      <h1>Sockets Music Player</h1>
      <p>
        For mobile users, song cannot be auto-loaded. Please click on the song
        to download the music file first.
      </p>

      {/* <input
        className="roomName"
        placeholder="enter room name"
        value={roomName}
        onChange = {(e) => setRoomName(e.target.value)}
      />
      <button onClick = {(() => registerRoom())} >register room</button>

      <button onClick={() => emitRoomName()}>join room</button> */}

      <button id="load" ref={load}>Load Music</button>
      <i id="play" ref={play} className="fa fa-play-circle show" aria-hidden="true"></i>
      <i id="pause" ref={pause} className="fa fa-pause-circle hide" aria-hidden="true"></i>
      <ul>
        <li id="song0" ref={song0}>Despacito</li>
        <li id="song1">Cute</li>
      </ul>
      {/* <button id="play">Play Song</button>
<button id="pause">Pause Song</button> */}
      <h2>
        This Player removes a problem we face many a times. Not loud enough
        speaker. Two clients can play same song that play simultaneously to use
        up many speakers on different clients.
      </h2>
      <h3>
        The music plays on all tabs/clients open. Each and every client has the
        controls for the music. <br />
        Right Now only one song is available on the server.
      </h3>
      <audio preload="true" id="myaudio" ref={audio} >
        <source src="/despacito.mp3" className="audio-source" />
      </audio>
      <button >disconnect</button>
    </>
  );
};

export default Home;
