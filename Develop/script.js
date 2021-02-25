$("#currentDay").text(moment().format("MMMM Do YYYY"));



let storedPlans = JSON.parse(localStorage.getItem("storedPlans"));

if (storedPlans !== null) {
    planTextArr = storedPlans;
} else {
    planTextArr = new Array(9);
    planTextArr[4] = "Picnic lunch";
}

let $plannerDiv = $("#plannerContainer");
$plannerDiv.empty();

for (let hour = 9; hour <= 17; hour++) {
    let index = hour - 9;

    let $rowDiv = $("<div>");
    $rowDiv.addClass("row");
    $rowDiv.addClass("plannerRow");
    $rowDiv.attr("hour-index",hour);

    let $col2TimeDiv = $("<div>");
    $col2TimeDiv.addClass("col-md-2");

    let $timeBoxSpn = $("<span>");

    $timeBoxSpn.attr("class","timeBox");

    
}