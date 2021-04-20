$(document).ready(function() {
  $('textarea').on('input', function (event) {
    let length = $(this).val().length
    let $counter= $(this).parent('form').find('.counter')
    updateCountdown($counter, length)
  })
})

function updateCountdown($counter, length) {
  let charsLeft = 140 - length
  $counter.text(charsLeft)
  $counter.css('color', 'black')
  if (charsLeft < 0) {
    $counter.css('color', 'red')
  }
}