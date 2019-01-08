// console.log('oh hai')
// console.log($)
let processData = (data, userInput) => {
  console.log(data);
  for (let i = 0; i < data.length; i++) {
    console.log('i work');
    const $li = $('<li>').text(data[i].Title)
    $li.append('form')
    $('ul').append($li)
  }
}

$(() => {
  $('form').on('submit', (event) => {
    event.preventDefault()

    const userInput = $('input[type="text"]').val()

    // =============user will enter the name of a title=================
    $.ajax({
      url: 'http://www.omdbapi.com/?apikey=53aa2cd6&s=' + userInput
    }).then(
      (data) => {
        processData(data.Search, userInput)
        // =====log the data ======
        // console.log(data)
        // =====calls the specific data======
        // console.log(data.Search)
        // =====calls first in the array=====
        // console.log(data.Search[0])
        // ========generate data===========================

        // ========generate a list from entire array =======

        // ======== make titles clickable ==================

        // ========info to show in a modal ================
      },
      () => {
        console.log('bad request')
      }
    )
  })
})
