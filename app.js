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
      $(event.currenttarget).addClass('mouseover')
      // ========= modal event handler ===============
      // =============================================
      $('#modal').removeClass('hidden')
      // ========== modal content A ===================
      // ==============================================
      // $('#modal').removeClass('hidden').addClass('modal-textbox').text('modal works')
      //
      // $('#modal').append('#modal-textbox')
      // ========== modal content B =================
      // ============================================
      $('#modal-textbox').on('mouseover', (event) => {

      })
      // ========== modal content C =================
      // ============================================
      $('#modal-textbox').text('modal works')

    })

    $('ul').append($li)
    // ========== mouseout ===================
    $('#modal').on('click', (event) => {
      $(event.currentTarget).addClass('hidden')
    })
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
