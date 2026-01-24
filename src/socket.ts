import http from "http";
import app from "./app";
import { Server } from "socket.io";

export const httpServer = http.createServer(app);

export const io = new Server(httpServer, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  console.log("Socket connected:", socket.id);

  socket.on("join-kelas", (kelasId: number) => {
    socket.join(`kelas-${kelasId}`);
  });

  socket.on("disconnect", () => {
    console.log("Socket disconnected:", socket.id);
  });
});
