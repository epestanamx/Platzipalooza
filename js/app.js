$(document).foundation()

$('[data-toggle-dia]').click(function (event) {
  const panel = $(this).data('toggleDia')

  $('#lineup-tabs').foundation('selectTab', panel)
})

const $offCanvas = $('#off-canvas')
$offCanvas.find('li').click(function (event) {
  $offCanvas.foundation('close')
})
