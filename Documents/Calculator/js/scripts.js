// Business (or back-end) logiv:
var add= function(number1, number2) {
    return number1 + number2;
};
var subtract = function(number2, number2){
    return number1 - number2;
};
var multiply = function(number2, number2){
    return number1 * number2;
};
var divide = function(number2, number2){
    return number1 / number2;
};

// user interface (front-end ) logic:
$(document).ready(function(){
    $("form#add").submit(function(event){
        event.preventDefault();
        var number1 = parseInt($("#add1").val());
        var number2 = parseInt($("#add2").val());
        // alert(add(number1, number2));
        var result = add(number1, number2);
        $("#output").text(result);
    });
});