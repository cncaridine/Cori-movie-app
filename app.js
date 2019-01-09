// console.log('oh hai')
// console.log($)
let processData = (data, userInput) => {
  // console.log(data);
  for (let i = 0; i < data.length; i++) {
    // console.log('i work');
    const $li = $('<li>').text(data[i].Title).on('click', (event) => {
      $(event.currentTarget).addClass('clickable')
    })
    $li.append('form')
    $('ul').append($li)
  }
}

$(() => {
  $('form').on('submit', (event) => {
    event.preventDefault()

    const userInput = $('input[type="text"]').val()
    // ===========  ?????get functioning clear button????????===================
    // const $clearButton = $('<button>')
    //    $compButton.text('clear')
    //    $compButton.appendTo('form')
    //
    //    $compButton.on('click', (event) => {
    //      $(event.currentTarget)
    //    })

    // ======== make titles clickable ==================

    // =============user will enter the name of a title=================
    $.ajax({
      url: 'http://www.omdbapi.com/?apikey=53aa2cd6&s=' + userInput
    }).then(
      (data) => {
        processData(data.Search, userInput)

        // ========info to show in a modal ================
      },
      () => {
        console.log('bad request')
      }
    )
  })
})
