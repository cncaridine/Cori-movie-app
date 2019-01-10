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

    })

      // ======== generic mouseover and mouseout =================
      // const $li = $('<li>').text(data[i].Title)
      //   .on('mouseover', (event) => {
      //   $(event.currentTarget).addClass('mouseover')
      //   .on('mouseout', (event) => {
      //     $(event.currentTarget).removeClass('mouseover')

      // ============= generic li ======================
      // const $li = $('<li>').text(data[i].Title)
      // $li.append('form')
      $('ul').append($li)
  }
}

$(() => {
  // ============== Grabbing Elements =================
  // Grabbing Elements
  // const $mouseOverOpen = $('#openModal')
  // const $modal = $('.modal')

  // // ================ Event Handlers ====================
  // const openModal = (event) => {
  //   $modal.show().text('works')
  // }

  // ====================Event Listeners==============
  // $modal.on('mouseover', openModal)

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
