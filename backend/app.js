const { Server } = require("socket.io");

const io = new Server({
  cors: {
    origin: "http://localhost:5173",
  },
});

let users = new Map();

io.on("connection", (socket) => {
  socket.on("joined_to_server", (data) => {
    users.set(socket.id, {
      name: data.name,
      socket_id: socket.id,
    });

    let arrayOfusers = Array.from(users.values());

    //bloardcast to all connected users including myself
    io.sockets.emit("active_users", arrayOfusers);
  });

  socket.on("broadcast", (data) => {
    socket.broadcast.to(data.socket_id).emit("messageChannel", data.message);
  });

  //disconnect event get fired on browser reload
  socket.on("disconnect", (reason) => {
    console.log("disconnecting on reload...");
    console.log("removing disconnected user/socket id...");
    users.delete(socket.id);

    let arrayOfusers = Array.from(users.values());
    io.sockets.emit("active_users", arrayOfusers);
  });
});

io.listen(3000);
