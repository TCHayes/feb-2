//target .lightbulb class with click listener
//use event.target to add bulb-on class to target
//use SOMETHING to remove bulb-on class from all other
// elements with .lightbulb class
//

$(function(){
  $('.js-lightbulb').click(function(event){
    $('.js-lightbulb').removeClass('bulb-on');
    $(event.currentTarget).addClass('bulb-on');
  });
});
