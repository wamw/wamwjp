'use strict'

import {Screen} from './modules/screen';

$(() => {
  Screen.init();
});

class Point {
  constructor(xyString) {
    [this.x, this.y] = xyString.split(',');
  }
}

class Line {
  constructor() {
    this.points = [];
  }

  push(point) {
    this.points.push(point);
  }

  distance() {
    let p1 = this.points[0];
    let p2;
    let distance = 0;
    for (let i = 1; i < this.points.length; i++) {
      let dx, dy;
      p2 = this.points[i];
      dx = p2.x - p1.x;
      dx = dx * dx;
      dy = p2.y - p1.y;
      dy = dy * dy;
      distance += Math.sqrt(dx + dy);
      p1 = p2;
    }
    return distance;
  }
}

$(() => {
    $('.letter path').each((index, item) => {
      let path;
      let line;
      let distance;
      let points;
      let duration;
      let delay;

      path = $(item).attr('d').replace('M', '').replace('z', '');
      line = new Line();

      points = path.split(' ').map(path => {
        let point = new Point(path);
        line.push(point);
        return point;
      });
      distance = line.distance();
      duration = distance / 500 + 0.2;
      delay = index * 0.08 + (Math.random() * 0.2 - 0.1);
      // delay = index * 0.25;

      // element
      $(item).attr('class', `line line${index}`);
      // console.log(`.line${index} { @include stroke-letter(${distance}, ${duration}s, ${delay}s); }`);
      // console.log(`.line${index} {stroke-dasharray: ${distance}; stroke-dashoffset: ${distance}; animation: show-stroke 1s ${delay} linear;animation-fill-mode: forwards;}`);
    });

    $('.letter .fill-line').each((index, item) => {
      let p1x = $(item).attr('x1');
      let p2x = $(item).attr('x2');
      let p1y = $(item).attr('y1');
      let p2y = $(item).attr('y2');
      let p1 = new Point(`${p1x},${p1y}`);
      let p2 = new Point(`${p2x},${p2y}`);
      let line = new Line();
      line.push(p1);
      line.push(p2);
      let distance = line.distance();
      let duration = distance / 150;
      let delay = index * 0.08 + (Math.random() * 0.4 - 0.2);

      // element
      $(item).attr('class', `fill-line fill-line${index}`);
      // console.log(`.fill-line${index} { @include fill-letter(${distance}, ${duration}s, ${delay}s); }`);
    });

    $('.letter .center-line').each((index, item) => {
      let p1x = $(item).attr('x1');
      let p2x = $(item).attr('x2');
      let p1y = $(item).attr('y1');
      let p2y = $(item).attr('y2');
      let p1 = new Point(`${p1x},${p1y}`);
      let p2 = new Point(`${p2x},${p2y}`);
      let line = new Line();
      line.push(p1);
      line.push(p2);
      let distance = line.distance();
      let duration = distance / 150;
      let delay = index * 0.08 + (Math.random() * 0.4 - 0.2);

      // element
      $(item).attr('class', `center-line center-line${index}`);
      // console.log(`.center-line${index} { @include center-letter(${distance}, ${duration}s, ${delay}s); }`);
    });
  }
);