 // Get current date

/*const today = new Date();
 *format.replace('mm', date.getMonth() + 1)
.replace('yy', date.getFullYear());
.replace('dd', date.getDate());
document.getElementById("#currentday");*/

$("#currentDay").text(moment().format("dddd, MMMM Do"));


