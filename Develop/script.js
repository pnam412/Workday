//display current time and date for scheduler using moment.js */

$("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));

//When the description box is clicked it is color coded to green for past, red for present and light grey for future.
const rows = document.getElementsByClassName("row");
let currentHour = parseInt(moment().format('H'));

Array.from(rows).forEach(row => {
    let
        rowIdString = row.id,
        rowHour;
    if (rowIdString) {
        rowHour = parseInt(rowIdString);
    }
    if (rowHour) {

        if (currentHour === rowHour) {
            setColor(row, "red");
        } else if ((currentHour < rowHour) && (currentHour > rowHour - 6)) {
            setColor(row, "green");
        } else if ((currentHour > rowHour) && (currentHour < rowHour + 6)) {
            setColor(row, "lightgrey");
        } else {
            setColor(row, "white");
        }
    }
});

$(".saveBtn").click(function () {
    console.log($(this))
    var time = $(this).parent().attr("id")
    console.log(time)
    var text = $(this).siblings("textarea").val()
    console.log(text)
    localStorage.setItem(time, text);
});
$(".time-block").each(function () {
    console.log($(this).attr("id"));
    localStorage.getItem($(this).attr("id"));
    $(this).children("textarea").val(localStorage.getItem($(this).attr("id")));
});

// If/Else statements to assign/remove colors
$(".time-block").each(function () {
    var currentTime = moment().hour();
    console.log(currentTime);
    console.log(parseInt($(this).attr("id").split("hour")[1]));
    var time = parseInt($(this).attr("id").split("hour")[1])
    if (time < currentTime) {
        $(this).children(".description").addClass("past")
    } else if (time === currentTime) {
        $(this).children(".description").removeClass("past")
        $(this).children(".description").addClass("present")
    } else {
        $(this).children(".description").removeClass("past")
        $(this).children(".description").removeClass("present")
        $(this).children(".description").addClass("future")  
    }

});



