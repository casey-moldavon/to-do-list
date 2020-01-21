$(function() {


    $(".complete-task").on("click", function(event){
        // event.preventDefault();

        var id = $(this).data("id");
        var completeStatus = {
            completed: 1
        };
        $.ajax("/api/tasks/" + id, {
            type: "PUT",
            data: completeStatus
        }).then(function(){
            console.log("Task COMPLETE!", completeStatus);
            location.reload();
        });
    });

    
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

    
    $(".forget-task").on("click", function(event){
        // event.preventDefault();

        var id = $(this).data("id");

        $.ajax( "/api/tasks/" + id, {
            type: "DELETE"
        }).then(function(){
            console.log("Forgotten task", id);
            location.reload();
        });
    });
});