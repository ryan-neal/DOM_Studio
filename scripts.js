// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", function() {
    let flightStatus = document.getElementById("flightStatus");
    let backgroundColor = document.querySelector("#shuttleBackground");
    let shuttleHeight = this.document.getElementById("spaceShuttleHeight");
    let takeOffButton = this.document.getElementById("takeoff");
    takeOffButton.addEventListener("click", function() {
        if (window.confirm("Are you ready for takeoff?")) {
            flightStatus.innerHTML = "Shuttle in flight!";
            backgroundColor.style.backgroundColor = "blue";
            shuttleHeight.innerHTML += 10000;
        };
    })
    let landButton = document.getElementById("landing");
    landButton.addEventListener("click", function() {
        alert("The shuttle is landing. Landing gear engaged.");
        flightStatus.innerHTML = "The shuttle has landed";
        backgroundColor.style.backgroundColor = "green";
        shuttleHeight.innerHTML = 0;
    })
    let abortButton = document.getElementById("missionAbort");
    abortButton.addEventListener("click", function() {
        if(window.confirm("Would you like to abort the mission?")) {
            flightStatus.innerHTML = "Mission aborted";
            backgroundColor.style.backgroundColor = "green";
            shuttleHeight.innerHTML = 0;
        };
    })
    let upButton = this.document.getElementById("up");
    let downButton = this.document.getElementById("down");
    let rightButton = document.getElementById("right");
    let leftButton = this.document.getElementById("left");
    let rocket = this.document.getElementById("rocket");
    let left = 0;
    let top = 0;
    upButton.addEventListener("click", function(event) {
        top -= 10;
        rocket.style.position = "relative";
        rocket.style.top = (top) + "px";
        console.log(top);
        event.preventDefault()
    })
    downButton.addEventListener("click", function(event) {
        top += 10;
        rocket.style.position = "relative";
        rocket.style.top = (top) + "px";
        console.log(top);
        event.preventDefault()
    })
    rightButton.addEventListener("click", function(event) {
        left += 10;
        rocket.style.position = "relative";
        rocket.style.left = (left) + "px";
        console.log(left);
        event.preventDefault()
    })
    leftButton.addEventListener("click", function(event) {
        left -= 10;
        rocket.style.position = "relative";
        rocket.style.left = (left) + "px";
        console.log(left);
        event.preventDefault()
    })
})