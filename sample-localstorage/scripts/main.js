document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
	document.getElementById("insertRecord").addEventListener("click", insertRecord);
	document.getElementById("searchRecord").addEventListener("click", searchRecord);
    document.getElementById("clearLocalStorage").addEventListener("click", clearLocalStorage);
    document.getElementById("removeButton").addEventListener("click", removeRecord);
}

function insertRecord(){
    var nameInput=document.getElementById("nameInput"),
    phoneInput=document.getElementById("phoneInput");
    
    localStorage.setItem(nameInput.value,phoneInput.value);
    nameInput.value ="";
    phoneInput.value="";
}

function removeRecord(){
    var searchRemoveNameInput = document.getElementById("searchRemoveNameInput"),
    result = document.getElementById("result");
    if(localStorage.getItem(searchRemoveNameInput.value)!=undefined)
    {
        localStorage.removeItem(searchRemoveNameInput.value);
        result.value="Deleted";
    } else {
        result.value="No such record!";
    }
}

function searchRecord(){
    var searchRemoveNameInput = document.getElementById("searchRemoveNameInput"),
    result = document.getElementById("result");
    if(localStorage.getItem(searchRemoveNameInput.value)!=undefined)
    {
        result.value=localStorage.getItem(searchRemoveNameInput.value);
    } else {
        result.value="No such record!"
    }
}

function clearLocalStorage(){
    localStorage.clear();
}