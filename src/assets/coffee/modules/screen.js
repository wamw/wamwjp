"use strict";

const contents = '#contents';

let wh = 0;
let ww = 0;
let contentOffsets = [];
let current = 0;

export class Screen {

  static init() {
    $('html').addClass('init');

    wh = $(window).height();
    ww = $(window).width();

    $(contents).find('> .wamw').height(wh);

    $(window).on('scroll', this.scrollHandler.bind(this));

    $('html').addClass('anim');
    // setTimeout(() => {
    //   this.show();
    // }, 2500);
  }

  static scrollHandler(event) {
    if ($(window).scrollTop() > 500) {
      // console.log($(window).scrollTop());
      // console.log(this);
      this.show();
    } else {
      this.black();
    }
  }

  static show() {
    // $(contents).find('> section').show();
    $('html')
      .removeClass('init')
      .addClass('show');
  }

  static black() {
    $('html')
      .removeClass('show')
      .addClass('init');
  }

}