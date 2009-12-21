/*
Countlines.JS
jnbek _AT_ yahoo.com
Counts lines in a given textarea element and grows the textarea height.
Example:
<textarea name="mytextarea" id="textarea_id" onkeyup="countlines('textarea_id');"></textarea>
*/
function countLines(textarea)
{
  var calc;
  var divisor = 3.4;
  var the_id = document.getElementById(textarea);
  var nchars = the_id.value.match(/\S/g).length;
  calc = (the_id.cols/divisor).toFixed(2);
  calc = the_id.cols-calc;
  var nlines = parseInt(nchars/calc);
  the_id.rows = nlines;

}
