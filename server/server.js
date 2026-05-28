const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

const app = express();
const server = http.createServer(app);

app.use(cors());

const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"]
  }
});

let rooms = {};

io.on("connection", (socket) => {
  console.log("Player Connected:", socket.id);

  socket.on("create_room", (roomId) => {
    socket.join(roomId);

    rooms[roomId] = {
      players: [socket.id]
    };

    socket.emit("room_created", roomId);
  });

  socket.on("join_room", (roomId) => {
    if (rooms[roomId] && rooms[roomId].players.length < 2) {
      socket.join(roomId);
      rooms[roomId].players.push(socket.id);

      io.to(roomId).emit("game_start");
    }
  });

  socket.on("move_piece", (data) => {
    socket.to(data.roomId).emit("update_move", data);
  });

  socket.on("fire_laser", (data) => {
    socket.to(data.roomId).emit("laser_fired", data);
  });

  socket.on("disconnect", () => {
    console.log("Disconnected:", socket.id);
  });
});

server.listen(3001, () => {
  console.log("Server running on port 3001");
});