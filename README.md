# PatChat
This is a Node.js project that uses Express and Socket.IO to create a real-time chat application.


## Table of Contents

- [Installation](#Installation)
- [Usage](#Usage)
- [Installation](#installation)
- [HTTPS?](#HTTPS?)
  
## Installation

Clone the repository: git clone https://github.com/Pmacdon15/PatChat.git
Install the dependencies: npm install express, npm install socket.io, npm install express http

## Usage

Start the server from the server directory: node indexexpress.js
Open your web browser and navigate to https://localhost:3000
Enter your name and start chatting!
Note: This project is set up as an HTTP server, but the configuration is designed to run through Apache, which holds the SSL certificate and forwards the traffic through port 443 to port 3001.

## HTTPS?

This project is currently designed to work with HTTPS hosted on Apache server, However on start up because of my configuration and being that it is an http server, it will cause a console error, just once at the start of webpage load. The site will work fine. Because this is an originally an HTTP server if you Change all references to WS or HTTP, change this const socket = io("wss://www.patchat.ca"); to //const socket = io("ws://<public-ip>:3001");  // When hosting on server (not local) //const socket = io("ws://localhost:3001");  // When hosting locally(Including the script reference on the html page), this will remove the console error on start up. at which point you can set up your own method for hosting.

Let me know if you need any further assistance!
