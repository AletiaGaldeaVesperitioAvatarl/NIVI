import { Server } from "socket.io";
import http from "http";
import app from "./app";

export const httpServer = http.createServer(app);
export const io = new Server(httpServer, { cors: { origin: "*" } });

io.on("connection", (socket) => {
  console.log("Socket connected:", socket.id);

  // Join beberapa kelas sekaligus
  socket.on("join-kelas", (kelasIds: number[]) => {
    kelasIds.forEach((id) => {
      socket.join(`kelas-${id}`);
      console.log(`Socket ${socket.id} joined kelas-${id}`);
    });
  });

  // Optional: user-specific room
  socket.on("join-user", (userId: number) => {
    socket.join(`user-${userId}`);
    console.log(`Socket ${socket.id} joined user-${userId}`);
  });

  socket.on("join-submission", (submissionId: number) => {
    socket.join(`submission-${submissionId}`);
    console.log(`Socket ${socket.id} joined submission-${submissionId}`);
  });

  socket.on("disconnect", () => {
    console.log("Socket disconnected:", socket.id);
  });
});
