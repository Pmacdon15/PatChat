
const socket = io("ws://96.51.136.132:3000");
//use ws://localhost:3000 if running locally for testing purposes

socket.on('message', text => {
    const el = document.createElement('li');
    el.innerHTML = text;
    document.querySelector('ul').appendChild(el);
});

document.querySelector('button').addEventListener('click', () => {
    const text = document.querySelector('input').value;
    socket.emit('message', text);
    document.querySelector('input').value = '';
});