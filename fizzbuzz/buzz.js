function fbMath(num){
  if (num % 15 === 0){
    return "fizzbuzz";
  } else if (num % 5 === 0) {
    return "buzz";
  } else if (num % 3 === 0) {
    return "fizz";
  } else {
    return num;
  }
};

function fbArray () {
  var result = [];
  var userNum = parseInt($('input[name="number-choice"]').val());
  for (var i=1; i <= userNum; i++){
      result.push(fbMath(i));
  }
  return result;
}

function doFizzBuzz () {
  fbArray().forEach(function (term) {
    switch(term){
      case "fizzbuzz":
        $('.js-results').append(
            '<div class="fizz-buzz-item fizzbuzz">' +
             '<span>FizzBuzz</span>' +
            '</div>'
          );
        break;
      case "buzz":
        $('.js-results').append(
            '<div class="fizz-buzz-item buzz">' +
             '<span>Buzz</span>' +
            '</div>'
          );
        break;
      case "fizz":
        $('.js-results').append(
            '<div class="fizz-buzz-item fizz">' +
             '<span>Fizz</span>' +
            '</div>'
          );
        break;
      default:
        $('.js-results').append(
            '<div class="fizz-buzz-item">' +
             '<span>' + term + '</span>' +
            '</div>'
          );
    }
  });
};




function addEventListeners(){
  $('#number-chooser').submit(function(event) {
    event.preventDefault();
    $('.js-results').empty();
    doFizzBuzz();
  });
}

$(addEventListeners);


//iterate through an inputed set of numbers
//print number or appropriate fizzbuzz term
// inside of a div; should look like:

// <div class="fizz-buzz-item">
//  <span>1</span>
// </div>
