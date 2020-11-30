const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io").listen(server);
const port = 3000;

let arrUser = [];

io.on("connection", socket => {
    console.log("a user connected :D");
    socket.on("client_send_username", msg => {
        console.log('Co nguoi dang ky username: ' + msg);
        if (arrUser.indexOf(msg) >= 0) {
            console.log('User da duoc ton tai');
            socket.emit("Server_dang_ki_fail", msg)
        } else {
            arrUser.push(msg);
            socket.Username = msg;
            io.sockets.emit("Server_dang_ki_success", { username: msg, id: socket.id })
        }
        // io.emit("chat message", msg);
    });
    socket.on("client_send_chat", msg => {
        io.sockets.emit("Server_send_chat", { username: socket.Username, msg: msg })
    })
});

server.listen(port, () => console.log("server running on port:" + port));