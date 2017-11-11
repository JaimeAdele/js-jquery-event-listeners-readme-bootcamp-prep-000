//define functions here
function getIt(){
  $('p').on('click', function(){
    alert("Hey!");
  });
};

function frameIt(){
  $(document).on('load', function(){
    $('img').addClass('tasty');
  });
};

function pressIt(){
  $('form input:first-child').on('keydown', function(key){
    if(key.which === 71){
      alert('g was pressed');
    }
  });
};

$(document).ready(function(){
  // call functions here
  getIt();
  frameIt();
  pressIt();
});
