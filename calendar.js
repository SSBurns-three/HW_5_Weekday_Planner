//display current date
$(function() {
  
  $(".saveBtn").on("click", function() {
    var task = $(this).siblings(".description").val()
    var time = $(this).parent().attr("id")

    localStorage.setItem(time,task)
  })
  
  // create function to update the hours - colors check time (moment) loop over time blocks <>= current hours
  //past/present/future class  1.call the function timer set intervale function hour/15 seconds (ms)

//retrieve  local storage data selector to grab value copy for all the hours
$("#hour-9 .description").val(localStorage.getItem("hour-9"))

  $("#currentDay").text(moment().format("dddd, MMMM Do"));
});


