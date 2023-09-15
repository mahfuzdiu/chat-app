const { Server } = require("socket.io");

const io = new Server({
  cors: {
    origin: "http://localhost:5173",
  },
});

io.on("connection", (socket) => {
  // ...

  socket.on("disconnect", (reason) => {
    console.log(io.engine.clientsCount);
  });
});

io.listen(3000);
