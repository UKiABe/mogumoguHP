$(document).on('turbolinks:load', function () {
  $('#external-events .fc-event').each(function () {
    $(this).data('event', {
      title: $.trim($(this).text()),
      textColor: "#FFF",
      stick: true
    });

    $(this).draggable({
      zIndex: 999,
      revert: true,
      revertDuration: 0
    });

  });

  $('#calendar').fullCalendar({
    height: 500,
    header: {
      right: 'prev, next today'
    },
    editable: true,
    droppable: true,
  });
});