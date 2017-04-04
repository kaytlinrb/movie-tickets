//Buisness logic
function Ticket(movie, age, time){
  this.movie = movie;
  this.age = age;
  this.time = time;
}

Ticket.prototype.priceAssign = function() {

  var price = 0;

  if (this.movie === "Lego Batman") {
    price = price + 5;
  } else if (this.movie === "Batman Begins") {
    price = price + 3;
  } else {
    price = price + 1;
  }

  if (this.age === "17 or Younger") {
    price = price + 2;
  } else if (this.movie === "18-54") {
    price = price + 3;
  } else {
    price = price + 1;
  }

  if (this.time === "11AM") {
  price = price + 1;
  } else if (this.movie === "6PM") {
  price = price + 3;
  } else {
  price = price + 2;
  }

  return price
}





//User Interface
$(function() {
  $("#ticket-form").submit(function(event){
    event.preventDefault();
    $("li").remove();
    var movieChoice = $("#movie-choice").val();
    var ageChoice = $("#age").val();
    var timeChoice = $("#time").val();

    var newTicket = new Ticket(movieChoice, ageChoice, timeChoice);
    // var ticketPrice = priceAssign(newTicket);
    var ticketPrice = newTicket.priceAssign();
    $("#ticket-info").append("<li>" + movieChoice + "</li>" + "<li>" + timeChoice + "</li>"+"<li>" + "$ " + ticketPrice + "</li>");
    $("#show-ticket").show();
  });

});
