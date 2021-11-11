const popup = document.querySelector(".overlay");
const button = document.querySelector(".closePopup");

function closePopup() {
    popup.style.display = "none";
}

button.addEventListener("click", closePopup);