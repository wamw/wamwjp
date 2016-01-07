
export class Screen {

  static init() {
    $(window).on('resize', () => {
      $('.📂.™').width($(window).width());
      $('.📂.™').height($(window).height());
    })

    setTimeout(() => {
      if ($(window).scrollTop() == 0) {
        $('body,html').animate({ scrollTop: $(window).height() - 40 }, 1400, 'easeInOutQuart')
      }
    }, 3200);
  }

}
