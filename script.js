function onclickLastUpdate(){
    document.getElementById("UpdateList").style.display = "block";
}
function onClickCloseTab(){
    document.getElementById("UpdateList").style.display = "none";
}
function closeDescriptionTab(){
    document.getElementById("Description").style.display = "none";
}
function Description(text = '', Uimg = ''){
    closeDescriptionTab();
    document.getElementById("textInDescription").innerText = text;
    document.getElementById("imgInDescription").src=Uimg;
    document.getElementById("Description").style.display = "block";
}
