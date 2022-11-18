const ws = new WebSocket("ws://localhost:8080");
const input = document.querySelector("#input");

const postMessage = (message, isOwn = false) => {
    document.querySelector(".chat-area").innerHTML += `
        <div class="msg-row ${isOwn ? "mine" : "others"}">
            <div class="bubble">${message}</div>
        </div>
    `;
};

ws.addEventListener("message", e => {
    e.data.text().then(postMessage);
});

document.querySelector("#form").addEventListener("submit", e => {
    e.preventDefault();
    console.log("send");
    ws.send(input.value);
    postMessage(input.value, true);
    input.value = "";
});