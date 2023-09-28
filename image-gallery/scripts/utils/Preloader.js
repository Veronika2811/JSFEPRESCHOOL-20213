import {createDomNode} from './createDomNode.js';

class Preloader {
  renderPreloader() {
    this.preloaderWrapper = createDomNode(
      this.preloaderWrapper,
      'div',
      null,
      document.body,
      'loader-wrapper'
    );
    this.preloader = createDomNode(
      this.preloader,
      'div',
      null,
      this.preloaderWrapper,
      'loader'
    );

    return this.preloaderWrapper;
  }

  removePreloader() {
    document.querySelector('.loader-wrapper').remove();
  }
}

export default Preloader;
