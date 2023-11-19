var bool = false;
const toChange = document.getElementById("forJS");

function OnClickedButton() {
    if (bool == true) {
        toChange.style.backgroundColor = "red";
        bool = false;
    } else {
        toChange.style.backgroundColor = "blue";
        bool = true;
    }
}