// console.log('oh hai')
// console.log($)

// ============== movie search ======================
// ==================================================
let processData = (data, userInput) => {
  // console.log(data);
  for (let i = 0; i < data.length; i++) {
  // console.log('i work');

    // ===========  mouseover li =====================
    // ===============================================
    const $li = $('<li>').text(data[i].Title).on('mouseover', (event) => {
      $(event.currentTarget).addClass('movieClick')
      // ========= modal event handler ===============
      // =============================================
      $('#modal').removeClass('hidden')
    })
    // ========== modal content poster url =================
    // ============================================
    $('#modal-textbox').on('click', (event) => {
      let moviePlot = (dataPlot, userSelection) => {
        for (let i = 0; i < dataPlot.length; i++) {
      $.ajax({
        url: 'http://www.omdbapi.com/?apikey=53aa2cd6&t=plot='
      }).then(
      (dataPlot) => {
        moviePlot(dataPlot.Title)
      })
      }
    }
$('ul').append($li)
    // ========== mouseout ===================
    $('#modal').on('click', (event) => {
      $(event.currentTarget).addClass('hidden')
    })
  })
}
// ======== modal content general==============
// ============================================
// $('#modal-textbox').text('modal works')

// ======== modal content from original ajax ==============
// ============================================
// $('#modal-textbox').on('mouseover', (event) => {
//   $(event.currentTarget).text(data[i].Year)

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
