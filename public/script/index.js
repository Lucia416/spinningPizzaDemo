var prices = [
  {
    name: 'winThree',
    id:'sliceThree'
  },
  {
      name: 'loseTwo',
      id:'sliceTwo'
    },
  {
      name: 'winOne',
      id:'sliceOne'
    },
  {
      name: 'loseEight',
      id:'sliceEight'
    },
  {
      name: 'winSeven',
      id:'sliceSeven'
    },
  {
      name: 'loseSix',
      id:'sliceSix'
    },
  {
      name: 'winFive',
      id:'sliceFive'
    },
  {
      name: 'loseFour',
      id:'sliceFour'
    }
];

$(function() {

var $r = $('.pizza').fortune(prices);
$('#congrats').hide();
$('#tryAgain').hide();

var clickHandler = function() {

  $r.spin().done(function(price) {
    if(price.id === 'sliceOne'){
      $('#congrats').show(600);
      $('#sliceOne').hide();
      $('#plate').show(600);
    } else if (price.id === 'sliceTwo'){
      $('#tryAgain').show(600);
    }else if (price.id === 'sliceThree'){
      $('#congrats').show(600);
        $('#sliceThree').css('-webkit-transform','translateZ(500px)');
        $('#plate').show(600);
    }else if (price.id === 'sliceFour'){
      $('#tryAgain').show(600);
      $('#sliceFour').css('-webkit-transform','translateZ(500px)');
    }else if (price.id === 'sliceFive'){
      $('#congrats').show(600);
      $('#sliceFive').css('-webkit-transform','translateZ(500px)');
            $('#plate').show(600);
    }else if (price.id === 'sliceSix'){
      $('.price').text('You have: ' + price.name);
      $('#sliceSix').css('-webkit-transform','translateZ(500px)');
    }else if (price.id === 'sliceSeven'){
      $('#congrats').show(600);
      $('#sliceSeven').css('-webkit-transform','translateZ(500px)');
            $('#plate').show(600);
    }else if (price.id == 'sliceEight'){
      $('.price').text('You have: ' + price.name);
      $('#sliceEight').css('-webkit-transform','translateZ(500px)');

    }
    $('.spinner').on('click touchstart', clickHandler);



  });
};

$('.spinner').on('click touchstart', clickHandler);


});
