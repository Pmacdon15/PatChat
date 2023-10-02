# PatChat
This is a Node.js project that uses Express and Socket.IO to create a real-time chat application.


## Table of Contents

- [Installation](#Installation)
- [Usage](#Usage)
- [Installation](#installation)
- [HTTPS?](#HTTPS?)
  
## Installation

Clone the repository: 

Enter This in the the terminal in the directory you want to clone the repository:

```bash

git clone https://github.com/Pmacdon15/PatChat.git

```

## Usage

Change the  Ip addresses to you public Ip Address or localhost, on app.js  to


``` javaScript

const socket = io("wss://www.patchat.ca"); to const socket = io("ws://<publicIp>:3001"); 

```

or 

``` javaScript

const socket = io("ws://localhost:3001");

```
Start the server in the terminal from the server directory:

```bash
node indexexpress.js
```

Open your web browser and navigate to:
```url

https://localhost:3000 Enter your name and start chatting!

```

Note: This project is set up as an HTTP server, but the configuration is designed to run through Apache, which holds the SSL certificate and forwards the traffic through port 443 to port 3001 which causes a service missmatch. If this project is set up as an http using the above steps there should be no error on the console when connecting to the site.

Let me know if you need any further assistance!
