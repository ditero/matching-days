//Author: Anele Sigenu
//Excercise: Mathcing days
//Year 2017 @ ProjectCodex
//Declare and selects Elemnts from the HTML index file

var listDays = document.querySelectorAll('td');
var btnCmp = document.getElementById('compBtn');
var thisDay = document.getElementById('firstDate');
var thatDay = document.getElementById('secDate');

//Match Days
var dayM = function matchDays(){

  var dayOne = new Date(thisDay.value);
  var dayTwo = new Date(thatDay.value);

     var stDay = dayOne.getDay();
     var ndDay = dayTwo.getDay();

     reFresh();
     //If days match Shade them with GREEN Color.
      if(stDay === ndDay){

           listDays[stDay].className = 'paintDay';
      }
      // else days do'nt match shade them with different Colors Red and Blue.
      else{

         listDays[stDay].className = 'paintDayRed';
         listDays[ndDay].className = 'paintDayBlue';

      }
};
//Reset the table i.e  the unshade all the columns.
function reFresh(){
  for (var i = 0; i < listDays.length; i++) {
    listDays[i].classList.remove('paintDay');
    listDays[i].classList.remove('paintDayRed');
    listDays[i].classList.remove('paintDayBlue');
  }
};
//Add Event Listener to the Button to trigger the processs.
btnCmp.addEventListener('click',dayM);
