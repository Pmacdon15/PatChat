
//const socket = io("ws://96.51.136.132:3000");  // When hosting on server (not local)
const socket = io("ws://localhost:3000");      // When hosting locally

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