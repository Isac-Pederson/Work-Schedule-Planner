var day = document.getElementById("day");
var icon = $('.fas');
var hour = new Date().getHours();
day.textContent = moment().format('MMMM Do, YYYY');
// Goes through each 1-9 blocks and looks if it's past or present
changeColor(9,"blockOne","One");
changeColor(10, "blockTwo", "Two");
changeColor(11, "blockThree", "Three");
changeColor(12, "blockFour", "Four");
changeColor(13, "blockFive", "Five");
changeColor(14, "blockSix", "Six");
changeColor(15,"blockSeven","Seven")
changeColor(16, "blockEight", "Eight");
changeColor(17, "blockNine", "Nine");
// Goes through 1-9 time blocks and looks for items to set/get
Local("One",One);
Local("Two", Two);
Local("Three", Three);
Local("Four", Four);
Local("Five", Five);
Local("Six", Six);
Local("Seven", Seven);
Local("Eight", Eight);
Local("Nine", Nine);
// changes color based if time is past present
function changeColor(x,y,z){
    if (hour > x) {
        document.getElementById(y).style.backgroundColor = "#d3d3d3";
        document.getElementById(z).style.backgroundColor = "#d3d3d3";
    }else if(hour == x){
            document.getElementById(y).style.backgroundColor = "#ff6961";
            document.getElementById(z).style.backgroundColor = "#ff6961";
    }
}
// puts get item and set item in one function
function Local(x,y){
    setItem(x,y);
    getItem(x,y);
}
// sets the item in localStorage when icon is clicked
function setItem(x,y,){
    icon.click(function () {
    y = document.getElementById(x).value;
    
    localStorage.setItem(x, y);
    });
}
// get item that is saved
function getItem(x,y){ 
    if (localStorage[x]) {
        y = localStorage[x];
        document.getElementById(x).value = y;
        
    }
}