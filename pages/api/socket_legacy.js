import { Server } from "socket.io";

const SocketHandler = (req, res) => {
  if (res.socket.server.io) {
    console.log("Socket is already running");
    res.end();
    return ;
  }
  console.log("Socket is initializing");
  const io = new Server(res.socket.server);
  res.socket.server.io = io;

  io.on("connection", (socket) => {
    socket.on("subscribe", function (room) {
      console.log("room name server side", room);
      socket.join(room);
    });
    socket.on('song0',function (data) {
      console.log('changing to ' + data);
      io.to(data).emit('song0','cute');
    });

    socket.on("play",function (data) {
        console.log("play data is ",data)
      io.to(data.room).emit('playsong',data.times);
    });
    socket.on("pause",function (data) {
        io.to(data.room).emit('pausesong',data.times);
    });
    socket.on("where",function (data) {
        //console.log(data);
        io.to(data.room).emit("current",data.times);
    });
    socket.on("disconnect", function () {
      console.log("Client Disconnected");
    });
  });
  
  res.end();
};

export default SocketHandler;
