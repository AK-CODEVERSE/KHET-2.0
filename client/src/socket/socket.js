import { io } from "socket.io-client";

export const socket = io(
  "https://khet-2-0.onrender.com"
);