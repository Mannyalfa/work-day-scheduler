 // Get current date

var dt = new Date();
 //document.getElementById("currentDay").innerHTML = dt.toLocaleDateString();
document.getElementById("currentDay").innerHTML = (("0"+(dt.getMonth()+1)).slice(-2)) +"/"+ (("0"+dt.getDate()).slice(-2)) +"/"+ (dt.getFullYear());


