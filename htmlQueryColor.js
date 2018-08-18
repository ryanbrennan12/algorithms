$(function() {
  // --------------STEP 1--------------
  // wrap every word in every `<p>` tag with a `<span>` tag.
  // for example: <p>Hey there</p>
  // becomes: <p><span>Hey</span><span>there</span></p>
  // HINT: the `split` array method is your friend

  // TODO: your code here!
  let words = $('p').text().split(' ')

  $('p').empty()

  $.each(words, function(word, i) {
//why is passing index passing word and vice versa?
  	$('p').append($('<span style= "color:red;">').text(i))
  })

//go back to 
//stackoverflow.com/questions/1484506/random-color-generator



  // --------------STEP 2--------------
  // Next, change spans to random colors, once per second

  // TODO: your code here!

});