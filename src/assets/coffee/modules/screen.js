
export class Screen {

  static init() {
    $(window).on('resize', () => {
      $('.📂.™').width($(window).width());
      $('.📂.™').height($(window).height());
    })

    setTimeout(() => {
      // $('body,html').animate({ scrollTop: '150px' }, 1200, 'easeInOutQuad')
    }, 3000);
  }

}
