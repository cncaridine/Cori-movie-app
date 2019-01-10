// console.log('oh hai')
// console.log($)

// ============== movie search ======================
let processData = (data, userInput) => {
  // console.log(data);
  for (let i = 0; i < data.length; i++) {
    // console.log('i work');

    // =========== genereic mouseover li =====================
    const $li = $('<li>').text(data[i].Title).on('mouseover', (event) => {
      $(event.currentTarget).addClass('mouseover')
      $('#modal').removeClass('hidden')
    })

      $('ul').append($li)
  }
}

$(() => {
  // ======================= user input =================
  $('form').on('submit', (event) => {
    const userInput = $('input[type="text"]').val()
    event.preventDefault()
    $(event.currentTarget).trigger('reset')

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
