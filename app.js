// console.log('oh hai')
// console.log($)

// ============== movie search ======================
let processData = (data, userInput) => {
  // console.log(data);
  for (let i = 0; i < data.length; i++) {
    // console.log('i work');

    // =========== mouseover li =====================
    const $li = $('<li>').text(data[i].Title).on('mouseover', (event) => {
      $(event.currentTarget).addClass('mouseover')
    })
    // $li.append('form')
    $('ul').append($li)
  }
}
// =============user will enter the name of a title=================

$(() => {
  $('form').on('submit', (event) => {
    event.preventDefault()

    const userInput = $('input[type="text"]').val()

    $.ajax({
      url: 'http://www.omdbapi.com/?apikey=53aa2cd6&s=' + userInput
    }).then(
      (data) => {
        processData(data.Search, userInput)
      },

      () => {
        console.log('bad request')
      }
    )
  })
})
