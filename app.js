// console.log('oh hai')
// console.log($)
$(() => {
  $('form').on('submit', (event) => {
    event.preventDefault()

    const userInput = $('input[type="text"]').val()

    // =============user will enter the name of a title=================
    $.ajax({
      url: 'http://www.omdbapi.com/?apikey=53aa2cd6&s=' + userInput
    }).then(
      (data) => {
        // =====calls the data ======
        console.log(data)
        // calls the specific data
        console.log(data.Search)
        // calls first in the array
        console.log(data.Search)[0])
        // ========generate a list from entire array =======
        $('#title').html(data.Title)
        $('#year').html(data.Year)

        // ======== make titles clickable ==================

        // ========info to show in a modal ================
        // $('#title').html(data.Title)
        // $('#year').html(data.Year)
        // $('#rated').html(data.Rated)
        // $('#plot').html(data.Plot)
      },
      () => {
        console.log('bad request')
      }
    )
  })
})
