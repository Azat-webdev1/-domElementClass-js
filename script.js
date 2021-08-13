'use strict';

class DomElement {
  constructor(selector, height, width, bg, fontSize) {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
  }

  createElem() {
    let elem;
    if (this.selector.substr(0, 1) === '.') {
      
      elem = document.createElement('div');
      elem.classList.add(this.selector.slice(1));
      
    } else if (this.selector.substr(0, 1) === '#') {
      elem = document.createElement('p');
      elem.setAttribute('id', this.selector.slice(1));
      
  
    }
  }
}