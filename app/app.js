//const socket = io("wss://patchat.ca");
//const socket = io("https://patchat.ca");

const socket = io("ws://96.51.136.132:3000");  // When hosting on server (not local)
//const socket = io("ws://localhost:3000");      // When hosting locally
let userName =""; 

window.onload = function () {
    // todo You Need work on getting an ssl cert becuase notifactions 
    // todo are blocked
    // Notification.requestPermission().then((perm) => {
    //     if (perm === 'granted') {
    //       console.log('Notification permission granted.');
    //     } else {
    //       console.log('Notification permission denied or dismissed.');
    //     }
    //   });
    
    userName = window.prompt("Please enter your name:");
    if (userName) {        
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

socket.on('userList', userList => {
    const usersList = document.getElementById('users'); // Select the ul element with id "users"
    console.log('Received userList:', userList); // Log the received data
    // Clear the existing user list
    usersList.innerHTML = '';
    
    // Add <h2>Online users:</h2> to the top of the list
    const h2 = document.createElement('h2');
    h2.textContent = 'Online Users';
    usersList.appendChild(h2);

    // Append each user to the "users" ul element as list items
    userList.forEach((userName) => {
        const userItem = document.createElement('li');
        console.log(userName); 
        userItem.textContent = userName; // Use textContent to set the username
        usersList.appendChild(userItem);
    });
});

// On button click, send message to server
document.querySelector('button').addEventListener('click', () => {
    const text = document.querySelector('input').value;
    socket.emit('message', text);
    document.querySelector('input').value = '';
});


// Function to scroll to the bottom of the <ul>
function scrollToBottom() {
    const messageList = document.querySelector('ul');
    messageList.scrollTop = messageList.scrollHeight;
}