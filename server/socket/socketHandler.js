module.exports = function(io) {
  io.on("connection", (socket) => {
    console.log(socket.id);

    socket.on("move", (data) => {
      socket.broadcast.emit("move", data);
    });
  });
};