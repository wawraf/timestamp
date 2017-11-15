exports.date = function(input) {
  if (input * 1000) input = input * 1000;
  
  var date = new Date(input);
  var day = date.getDate(),
      month = date.getMonth(),
      year = date.getFullYear();
  var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  var natural;
  
  (isNaN(date)) ? natural = null : natural = day + " " + months[month] + " " + year;
  
  return {"unix": Math.round(date.getTime() / 1000), "natural": natural};
}