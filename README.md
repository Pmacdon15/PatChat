# PatChat
This is a Node.js project that uses Express and Socket.IO to create a real-time chat application.

Installation
Clone the repository: git clone https://github.com/Pmacdon15/PatChat.git
Install the dependencies: npm install express, npm install socket.io, npm install express http
Usage
Start the server: node indexexpress.js
Open your web browser and navigate to https://localhost:3000
Enter your name and start chatting!
Note: This project is set up as an HTTP server, but the configuration is designed to run through Apache, which holds the SSL certificate and forwards the traffic through port 4432 to port 3000.
If you run this project on your local machine, you may see console errors due to service mismatch.

HTTPS
This project is designed to work with HTTPS. If you are hosting this project on an Apache server, you will need to configure HTTPS. All links to this project should point to 
wss:// or https:// to ensure that the chat application works correctly.

License
This project is licensed under the MIT License. See the LICENSE file for details.

Let me know if you need any further assistance!
