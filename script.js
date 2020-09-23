//TODO: Set current date in top p tag

var today = moment().format('MMMM Do YYYY, H:mm a');
    // console.log(today);
var currentDay = moment().format('1');
//Create Current day at top of page
$("#currentDay").text(today);
var currentTime = Number(moment().format('H'));

var eventArray = [];
var todo = {
    todoTime: " ",
    itemDescription:  " ",
    itemDate: " "
}



todayEvents();
function todayEvents() {
    var hours = ["9 am ","10 am","11 am","12 pm","1 pm","2 pm","3 pm","4 pm","5 pm"]
for (var i = 0; i < hours.length ; i++) {   
    var startDay = (hours[i]) + (timeOfDay);
    //Create Rows for the events
    var hour = $("<section>").addClass("row time-block");
    //Create column for the hour
    var time = $("<div>").addClass("col-md-2 hour font-weight-bold");
    //Creates the text area
    var textArea = $("<textarea>").addClass("col-md-8 description").attr("id", i + (timeOfDay));
    //Create the save button
    var save = $("<button>").addClass("col-md-1 saveBtn");
    //Create icon
    var icon = $("<i>").addClass("far fa-save").attr( "i", "hover");
    var timeOfDay = " ";
    //Create color code for past/present/future
    if (i < currentTime) {
        textArea.addClass("past");
    }
    else if (i > currentTime) {
        textArea.addClass("future");
    }
    else {
        textArea.addClass("present");
    }
    //Appending each element to the page
    save.append(icon);
    time.text(startDay);
    hour.append(time);
    hour.append(textArea);
    hour.append(save);
   $(".container").append(hour);

}}

//TODO: Save click event to local 
$(".container").on("click", '.saveBtn', function (event) {
    var textArea = $(this).siblings('textarea').val().trim();
    var timeArea = $(this).siblings('div').text();
    var theDay = moment().format('l');
 
    
    // push to object the eventArray array
    if (eventArray == null ) {
        eventArray = [];
    }
    else if (eventArray != null) (
        eventArray = JSON.parse(localStorage.getItem("eventArray"))
    )
    todo.todoTime = timeArea;
    todo.itemDescription = textArea;
    todo.itemDate = theDay;
      
    eventArray.push(todo);
        
    var saves = JSON.stringify(eventArray);
       
    localStorage.setItem("eventArray", saves);
})



