var current = moment().format("dddd, MMMM Do YYYY LT");

// function setData () {
//     var now = document.getElementById("currentDay");
//     now.textContent=current;
// }

$(document).ready(function() {
    // saveBtn click listener
    $(".saveBtn").on("click", function() {
        // Get nearby value in jquery
        var text = $(this).siblings(".description").val();
        var time = $(this).parents().attr("id");
        
        localStorage.setItem(time, text);
    })


function timeTracker () {
    // get current number of hours.
    var timeNow = moment().hour(); 
    console.log(timeNow)
    $(".time-block").each(function() {
        var blockTime = parseInt($(this).attr("id").split("-")[1]);
        console.log(blockTime)
        // Loops through the time blocks
        if (blockTime < timeNow) {
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past");
        } else if (blockTime === timeNow) {
            $(this).removeClass("future");
            $(this).removeClass("past");
            $(this).addClass("present");
        }else{
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        
        }
    })
}

$("#timeblock-9 .description").val(localStorage.getItem("timeblock-9"))
$("#timeblock-10 .description").val(localStorage.getItem("timeblock-10"))
$("#timeblock-11 .description").val(localStorage.getItem("timeblock-11"))
$("#timeblock-12 .description").val(localStorage.getItem("timeblock-12"))
$("#timeblock-13 .description").val(localStorage.getItem("timeblock-13"))
$("#timeblock-14 .description").val(localStorage.getItem("timeblock-14"))
$("#timeblock-15 .description").val(localStorage.getItem("timeblock-15"))
$("#timeblock-16 .description").val(localStorage.getItem("timeblock-16"))
$("#timeblock-17 .description").val(localStorage.getItem("timeblock-17"))

timeTracker();

})