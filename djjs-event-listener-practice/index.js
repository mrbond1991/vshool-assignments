const box = document.getElementById("box");

box.addEventListener("mouseover", function () {
    box.style.backgroundColor = "blue"
});

box.addEventListener("mousedown", function () {
    box.style.backgroundColor = "red"
});

box.addEventListener("mouseup", function () {
    box.style.backgroundColor = "yellow"
});

box.addEventListener("dblclick", function () {
    box.style.backgroundColor = "green"
});

window.addEventListener("scroll", () => {
    box.style.backgroundColor = "orange"
});

box.addEventListener("keydown", (event) => {
        const keyName = event.target.key;

        if (keyName === "r") {
            box.style.backgroundColor = "red";
        }
    })