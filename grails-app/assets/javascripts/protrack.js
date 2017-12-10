//= require jquery-2.2.0.min
//= require bootstrap
//= require_self

/*
EXTERNAL from https://www.w3schools.com/html/html5_draganddrop.asp
 */

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
    deleeete(ev, data);
    //test();
}
/*
require(["./client/src/app/task/task.module.js"], function (taskmodule)
{
    function saveStatus(ev, data) {
        //var status = ev.dataTransfer.getData("status");
        //alert( status.toString() );
        var test1 = TaskModule;
    }
});
*/
function deleeete(ev, data)
{

    var URL="/task/updateStatus/3";

    $.ajax({
        url: URL,
        data: {id:1, newStatus:'_DONE_'},
        dataType: "application/json",
        //contentType: false,
        method: 'PUT',
        success: function (result) {
            // Do something with the result
            console.log(result)
        },
        error: function (msg) {
            console.log("error in ajax")
            console.log(msg)
        }
    });
}

function test() {

    var URL="${createLink(controller:'Task',action:'updateStatus')}";

    $.ajax({
        url: URL,
        dataType: "json",
        success: function (data) {
            response($.map(data, function (item) {
                return {
                    id: item.id,
                    value: item.name
                }
            }));
        }
    });
}