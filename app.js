// console.log('oh hai')
// console.log($)
let processData = (data, userInput) => {
  // console.log(data);
  for (let i = 0; i < data.length; i++) {
    // console.log('i work');
    // mouseover li
    // const $li = $('<li>').text(data[i].Title).on('mouseover', (event) => {
    //   $(event.currentTarget).addClass('mouseover')
    // })
    // add modal to mouseover li functionality
    const $li = $('<li>').text(data[i].Title).on('mouseover', (event) => {
      $(event.currentTarget).addClass('mouseover')
    })
    $li.append('form')
    $('ul').append($li)
  }
}

$(() => {
  $('form').on('submit', (event) => {
    event.preventDefault()

    // $('#btn').on('click', () => {
    //   // console.log('button was clicked!!')
    //   $(event.currentTarget).reset()
    // })

    const userInput = $('input[type="text"]').val()

    // =============user will enter the name of a title=================
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
