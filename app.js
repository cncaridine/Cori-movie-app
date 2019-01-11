
// ============== movie search ======================
// ==================================================
let processData = (data, userInput) => {
  // console.log(data);
  for (let i = 0; i < data.length; i++) {
  // console.log('i work');

    // ===========  mouseover li =====================
    // ===============================================
    const $li = $('<li>').text(data[i].Title).on('click', (event) => {
      $(event.currentTarget).addClass('movieClick').css('color', 'red')
      // ========= modal event handler ===============
      // =============================================
      $('#modal').removeClass('hidden')
      // ============ modal with year ================ ================================================
      $('#modal-textbox').on('mouseover', (event) => {
        $(event.currentTarget).text(data[i].Year)
      })
    })

$('ul').append($li)
    // ========== mouseout ===================
    $('#modal').on('click', (event) => {
      $(event.currentTarget).addClass('hidden')
    })
  }
}

// ======== modal content from original ajax ==============
// ========================================================
$(() => {
  // ======================= user input =================
  // ====================================================
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
