
$(function() {
  var prices = [
    {
      name: 'winThree',
      id:'Three'
    },
    {
        name: 'loseTwo',
        id:'Two'
      },
    {
        name: 'winOne',
        id:'One'
      },
    {
        name: 'loseEight',
        id:'Eight'
      },
    {
        name: 'winSeven',
        id:'Seven'
      },
    {
        name: 'loseSix',
        id:'Six'
      },
    {
        name: 'winFive',
        id:'Five'
      },
    {
        name: 'loseFour',
        id:'Four'
      }
  ];


var $r = $('.pizza').fortune(prices);

  const userWinner = (e) => {
  return `
    <div class="title">
      <span >You won a free pizza slice!!!</span>
    </div>
  `;
}
const userLoser = (e) => {
return `
  <div class="title">
    <span > Sorry, spin again!</span>
  </div>
`;
}



var clickHandler = () => {

  $r.spin().done((price)=>{

    if(price.id === 'One'){
      $('.title').html(userWinner);
      $('#sliceOne').hide();
      $('#plate').show(600);
      setTimeout(() => {
        $('#sliceOne').show();
        $('#plate').hide(600);

      }, 2300);
    }else if (price.id === 'Four'){
      $('.title').html(userWinner);
      $('#sliceFour').hide();
      $('#plate').show(600);
      setTimeout(() => {
        $('#sliceFour').show();
        $('#plate').hide(600);

      },2300);
      }else if (price.id === 'Seven'){
          $('.title').html(userWinner);
          $('#sliceSeven').hide();
          $('#plate').show(600);
          setTimeout(() => {
            $('#sliceSeven').show();
            $('#plate').hide(600);

          }, 2300);
        }else{
          $('.title').html(userLoser);
          $('.pizza').show();
        }


  });

};





$('.spinner').on('click', clickHandler);








});
