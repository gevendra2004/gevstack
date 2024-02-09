$('.order').click(function (e) {

    let button = $(this);
  
    if (!button.hasClass('animate')) {
      button.addClass('animate');
      setTimeout(() => {
        button.removeClass('animate');
      }, 10000);
    }
  
  });