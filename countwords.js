/*
countwords.js: Counts the words in a given form/textarea
jnbek _AT_ yahoo.com
Configuration:
This requires three elements. A form, a textarea and a span to display the result.
The form's name attribute needs to be given to the myform variable below.
The textarea's name attribute needs to be given to the mytextarea variable below.
The span's id attribute needs to be given to the myspan variable below.
This can be used to limit a textarea's number of characters with an onSubmit event.
Example:
<form name="coolform" action="script">
    <label for="cooltextarea">Fill the Textarea: </label><br />
    <textarea name="cooltextarea" onkeyup="javascript:showcount();"></textarea>
    <br />
    <p>Word Count: <span id="spanid">0</span></p>
    <button type="button" onClick="javascript:checkcount();">Submit</button>
</form>
*/
var myform = 'form_name';
var mytextarea = 'textarea';
var myspan = 'spanid';
var maxchars = 1500;
// End Configuration.
function countwords()
{
  var wordcount = document.myform.mytextarea.value.split(' ').length;
  return wordcount;
}
function showcount()
{
  return document.getElementById(myspan).innerHTML = countwords();
}
function checkcount()
{
 var numwords = countwords();
 if (numwords > maxchars)
 {
    alert('The size of the email message has exceeded the max size of '+maxchars+' words. Please try again.');
 }
 else
 {
    document.myform.submit();
 }
 return;
}
