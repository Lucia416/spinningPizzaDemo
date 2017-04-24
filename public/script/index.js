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

var clickHandler = function() {

  $r.spin().done(function(price) {
    if(price.id === 'sliceOne'){
      $('.price').text('You have: ' + price.name);
      $('#sliceOne').css('-webkit-transform','translateZ(-500px)');
      $('#plate').show(600);
    } else if (price.id == 'sliceTwo'){
      $('.price').text('You have: ' + price.name);
      $('#sliceTwo').css('-webkit-transform','translateZ(500px)');
    }else if (price.id == 'sliceThree'){
      $('.price').text('You have: ' + price.name);
        $('#sliceThree').css('-webkit-transform','translateZ(500px)');
            $('#plate').show(600);
    }else if (price.id == 'sliceFour'){
      $('.price').text('You have: ' + price.name);
      $('#sliceFour').css('-webkit-transform','translateZ(500px)');
    }else if (price.id == 'sliceFive'){
      $('.price').text('You have: ' + price.name);
      $('#sliceFive').css('-webkit-transform','translateZ(500px)');
            $('#plate').show(600);
    }else if (price.id == 'sliceSix'){
      $('.price').text('You have: ' + price.name);
      $('#sliceSix').css('-webkit-transform','translateZ(500px)');
    }else if (price.id == 'sliceSeven'){
      $('.price').text('You have: ' + price.name);
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
