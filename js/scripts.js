//Buisness logic
function Ticket(movie, age, time){
  this.movie = movie;
  this.age = age;
  this.time = time;
}

Ticket.prototype.priceAssign = function() {

  var price = 0;
  var price2 = 0;
  var price3 = 0;
    for (var i =0; i<1 ; i++){
      if (this.movie === "Lego Batman") {
        price = price + 5;
      } else if (this.movie === "Batman Begins") {
        price = price + 3;
      } else {
        price = price + 1;
      }
      console.log(price);
    }

    for (var i =0; i<1 ; i++){
      if (this.age === "17 or Younger") {
        price2 = price2 + 2;
      } else if (this.movie === "18-54") {
        price2 = price2 + 3;
      } else {
        price2 = price2 + 1;
      }
    }
    console.log(price2);

      for (var i =0; i<1 ; i++) {
        if (this.time === "11AM") {
        price3 = price3 + 1;
        } else if (this.movie === "6PM") {
        price3 = price3 + 3;
        } else {
        price3 = price3 + 2;
        }
    }
    console.log(price3);
    return price + price2 + price3
}





//User Interface
$(function() {
  $("#ticket-form").submit(function(event){
    event.preventDefault();

    var movieChoice = $("#movie-choice").val();
    var ageChoice = $("#age").val();
    var timeChoice = $("#time").val();

    var newTicket = new Ticket(movieChoice, ageChoice, timeChoice);
    // var ticketPrice = priceAssign(newTicket);
    console.log(newTicket.priceAssign());
  });

});
