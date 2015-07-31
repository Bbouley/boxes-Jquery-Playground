$(document).ready(function(){

  console.log("hello world");

  // $('#secretBox').css('background', 'white').append("<h1>Secret Box</h1>");

  // $('#row1').children().addClass('boxType3');

  // $('.box').last().remove();

  // // $('.boxType1').css('background', 'white');

  // $('#row2').children().eq(0).css('background', 'none');
  // $('#row2').children().eq(1).css('background', 'none');

  // // $('#container').not('#secretBox').not('.row').css('width', '2px');

  $('#container').on('click', function(event){
    console.log('x: ' + event.pageX + ', y: ' + event.pageY);
  });


    $('.boxType1').html('').append('<a href = \'http://www.galvanize.com\'>galvanize</a>');

      $('a').on('click', function(event){
      $('boxType1').html('');
      alert('You Can NEVER LEAVE');
      event.preventDefault();
     });


      var action = 1;

    $('.box').on('click', function (event){
      if (action === 1){$(this).css({'background-image': 'url(http://www.hercampus.com/sites/default/files/2014/10/05/Sweet-puppy-sitting.jpg)', 'background-size': 'contain', 'background-repeat': 'no-repeat'});
       action = 2;
   } else {
      $(this).css('background-image', '');
      action = 1;
   }

    });




});

