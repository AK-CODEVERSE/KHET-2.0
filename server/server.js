const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.send("Laser Chess Server Running");
});

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});

const rooms = {};

io.on("connection", (socket) => {
  console.log("Player Connected:", socket.id);

  // CREATE ROOM
  socket.on("create_room", (roomId) => {
    socket.join(roomId);

    rooms[roomId] = {
      players: [socket.id]
    };

    console.log(`Room Created: ${roomId}`);

    socket.emit("room_created", roomId);
  });

  // JOIN ROOM
  socket.on("join_room", (roomId) => {
    if (!rooms[roomId]) {
      socket.emit("error_message", "Room does not exist");
      return;
    }

    if (rooms[roomId].players.length >= 2) {
      socket.emit("error_message", "Room is full");
      return;
    }

    socket.join(roomId);

    rooms[roomId].players.push(socket.id);

    console.log(`Player joined room: ${roomId}`);

    io.to(roomId).emit("game_start", {
      roomId,
      players: rooms[roomId].players
    });
  });

  // MOVE PIECE
  socket.on("move_piece", (data) => {
    socket.to(data.roomId).emit("update_move", data);
  });

  // ROTATE PIECE
  socket.on("rotate_piece", (data) => {
    socket.to(data.roomId).emit("update_rotation", data);
  });

  // FIRE LASER
  socket.on("fire_laser", (data) => {
    socket.to(data.roomId).emit("laser_fired", data);
  });

  // RESTART GAME
  socket.on("restart_game", (roomId) => {
    io.to(roomId).emit("restart_game");
  });

  // DISCONNECT
  socket.on("disconnect", () => {
    console.log("Disconnected:", socket.id);

    for (const roomId in rooms) {
      rooms[roomId].players =
        rooms[roomId].players.filter(
          (id) => id !== socket.id
        );

      if (rooms[roomId].players.length === 0) {
        delete rooms[roomId];
      }
    }
  });
});

// IMPORTANT FOR RENDER
const PORT = process.env.PORT || 3001;

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});