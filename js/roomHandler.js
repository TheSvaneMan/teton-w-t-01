// App init
let room = "";
let url = "";

function changeRoom(e) {
    console.log("value: " + e.value)
}

function selectRoom(e) {
    console.log("value: " + e.value)
    room = e.value;
}

function generateURL() {
    window.location.href = "chatRoom.html?room=" + room;
}