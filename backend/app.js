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

    console.log(arrayOfusers);
    console.log(io.sockets);

    //broadcast to self
    // socket.emit('active_users', arrayOfusers)

    //broadcast to every connected users except self
    //socket.broadcast.emit("active_users", arrayOfusers);

    //bloardcast to all connected users including myself
    io.sockets.emit("active_users", arrayOfusers);
  });

  socket.on("disconnect", (reason) => {
    console.log("disconnecting on reload...");
    users.delete(socket.id);

    let arrayOfusers = Array.from(users.values());
    io.sockets.emit("active_users", arrayOfusers);
  });
});

io.listen(3000);
