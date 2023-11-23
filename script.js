
function onclickLastUpdate(){
    document.getElementById("UpdateList").style.display = "block";
}
function onClickCloseTab(){
    document.getElementById("UpdateList").style.display = "none";
}
function Description(text){
    document.getElementById("descriptionNav").style.display = "block";
    document.getElementById("textInDescription").innerHTML = text;
}
function closeDescriptionTab(){
    document.getElementById("descriptionNav").style.display = "none";
}