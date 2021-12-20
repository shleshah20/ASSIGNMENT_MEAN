const io = require('socket.io-client');
const socket = io.connect("ws://localhost:5000");
socket.on('message', (msg) => {
    console.log("Match Title : " + msg.Match_Title);
    console.log("Match Date : " + msg.Match_Date);
    console.log("Match Venue : " + msg.Venue);
    console.log("Score : " + msg.Score);
    console.log("Over : " + msg.Over);
    console.log("Wicket : " + msg.Wicket);
})

