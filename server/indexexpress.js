const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
    cors: { origin: "*" }
});


// Serve the static HTML file
 app.get('/', (req, res) => {
     res.sendFile(path.join(__dirname, '../app/index.html'));
});

// Serve the app.js file
app.get('/app.js', (req, res) => {
    res.sendFile(path.join(__dirname, '../app/app.js'));
});

// Serve the stylesheet.css 
app.get('/stylesheet.css', (req, res) => {
    res.sendFile(path.join(__dirname, '../app/css/stylesheet.css'));
});

io.on('connection', (socket) => {
    console.log('a user connected');

    // Listen for the 'join' event and store the userName with the socket
    socket.on('join', (userName) => {
        console.log(`${userName} joined`);
        socket.userName = userName; // Store the userName with the socket
        io.emit('message', `${userName} joined`);
    });

    socket.on('message', (message) => {
        console.log(socket.userName +" said "+ message);

        // Use socket.userName to include the user's name in the message
        if (socket.userName) {
            io.emit('message', `${socket.userName} said: ${message}`);
        } else {
            io.emit('message', `${socket.id.substr(0, 2)} said ${message}`);
        }
    });
});

// io.on('connection', (socket) => {
//     console.log('a user connected');

//     socket.on('message', (message) => {
//         console.log(message);
//         io.emit('message', `${socket.id.substr(0, 2)} said ${message}`);
//     });
// });

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
