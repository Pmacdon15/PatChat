const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
    cors: { origin: "*" }
});

//  app.get('/', (req, res) => {
//      res.send('Hello World!');
//  });
// Serve the static HTML file
 app.get('/', (req, res) => {
     res.sendFile(path.join(__dirname, '../app/index.html'));
});
// Serve static JavaScript files from the 'app' folder
 app.use('/static', express.static(path.join(__dirname, '../app')));

// Serve the app.js file
app.get('/app.js', (req, res) => {
    res.sendFile(path.join(__dirname, '../app/app.js'));
});

io.on('connection', (socket) => {
    console.log('a user connected');

    socket.on('message', (message) => {
        console.log(message);
        io.emit('message', `${socket.id.substr(0, 2)} said ${message}`);
    });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
