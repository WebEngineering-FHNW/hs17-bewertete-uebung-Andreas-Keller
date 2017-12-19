
/*
EXTERNAL: drop functions adapted from https://www.w3schools.com/html/html5_draganddrop.asp
 */

'use strict';

var parentIdSrc;
var parentIdDst;

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    parentIdSrc = document.getElementById(ev.target.id).parentElement.id;
    console.log(parentIdSrc);
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
    post(ev, data);
}

function post(ev, data)
{
    parentIdDst = document.getElementById(ev.target.id).id;
    console.log(parentIdDst);

    var URL="/task/updateStatus";

    $.ajax({
        type: "POST",
        url: URL,
        data: {id: data, newStatus: parentIdDst},
        success: function (result) {
            console.log("success");
        },
        error: function (msg) {
            console.log("error in ajax")
        }
    });
}

function dropDelete(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    var URL="deleteTask";

    $.ajax({
        type: "POST",
        url: URL,
        data: {id: data},
        success: function (result) {
            location.reload(true);
            console.log("success");
        },
        error: function (msg) {
            console.log("error in ajax")
            console.log(msg)
        }
    });
}