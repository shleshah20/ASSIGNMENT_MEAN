let data = {
    Match_Title: "Mumbai indians vs Kokta night riders",
    Match_Data: "09/08/2021",
    Venue: "Mumbai",
    Score: 179,
    Over: 10,
    Wicket: 5
}

const http = require('http').createServer()
const PORT = process.env.PORT || 5000

http.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})
// Socket
const io = require('socket.io')(http);

io.on('connect', (socket) => {
    socket.emit("message", data)
}).on('error', (error) => {
    console.log(error);
})



