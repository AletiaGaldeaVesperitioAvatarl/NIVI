import { Server } from "socket.io";
import http from "http";
import app from "./app";

export const httpServer = http.createServer(app);
export const io = new Server(httpServer, { cors: { origin: "*" } });

io.on("connection", (socket) => {
  const userId = socket.handshake.auth?.userId;

  if (userId) {
    socket.join(`user-${userId}`);
    console.log(`🟢 user-${userId} joined via auth`);
  }

  socket.on("disconnect", () => {
    console.log("🔴 socket disconnected");
  });
});
