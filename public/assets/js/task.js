var orm = require("../config/orm.js");

$(function() {
    $(".create-form").on("submit", function(event){
        event.preventDefault();

        var newTask = {
            task: $("#newTask")
            .val()
            .trim(),
            completed: 0
        };

        $.ajax("/api/tasks", {
            type: "POST",
            data: newTask
        }).then(function(){
            console.log("Created new Task");
            console.log("Gettin BUSY!");
            location.reload();
        });
    });

    $(".complete-task").on("click", function(event){
        event.preventDefault();

        var id = $(this).data("id");
        var completeStatus = {
            completed: 1
        };
        $.ajax("/api/tasks/" + id, {
            type: "PUT",
            data: completeStatus
        }).then(function(){
            console.log("Task COMPLETE!");
            location.reload();
        });
    });
    
    $(".forget-task").on("click", function(event){
        event.preventDefault();

        var id = $(this).data("id");

        $.ajax({
            type: "DELETE",
            url: "/api/tasks/" + id
        }).then(location.reload());
    });
});