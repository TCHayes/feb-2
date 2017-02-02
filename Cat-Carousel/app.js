function catCarousel() {
  //inside div.hero need to change img src
  //Change it to the photo that is being
  //clicked
  $('.thumbnail').click(function(event){
    var imgSrc = $(event.target).attr('src');
    $('.hero img').attr('src',imgSrc);
  });

}

$(catCarousel);
