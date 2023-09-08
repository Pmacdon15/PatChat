
//const socket = io("ws://96.51.136.132:3000");  // When hosting on server (not local)
const socket = io("ws://localhost:3000");      // When hosting locally
let userName =""; 

window.onload = function () {
    userName = window.prompt("Please enter your name:");
    if (userName) {
        alert(`Hello, ${userName}!`);

        // Send the user's name to the server
        socket.emit('join', userName);
    } else {
        alert("You didn't enter a name.");
    }
    
    const inputField = document.getElementById('message');
    inputField.focus();

    const submitButton = document.getElementById('send');
    inputField.addEventListener('keyup', (event) => {
        if (event.key === 'Enter') {
            // When Enter key is pressed, click the button
            send.click();
        }
    });
};
    
socket.on('message', text => {
    const el = document.createElement('li');
    el.innerHTML = text;
    document.querySelector('ul').appendChild(el);
    scrollToBottom();
});


document.querySelector('button').addEventListener('click', () => {
    const text = document.querySelector('input').value;
    socket.emit('message', text);
    document.querySelector('input').value = '';
});


// testing 
// Function to scroll to the bottom of the <ul>
function scrollToBottom() {
    const messageList = document.querySelector('ul');
    messageList.scrollTop = messageList.scrollHeight;
}