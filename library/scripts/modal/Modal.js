import Element from '../Element.js';

class Modal extends Element {
  constructor(classes) {
    super();
    this.classes = classes;
  }

  buildModal(content, colorCloseBtn) {
    this.overlay = this.createDomNode(
      this.overlay,
      'div',
      null,
      null,
      'overlay'
    );

    this.modal = this.createDomNode(
      this.modal,
      'div',
      null,
      this.overlay,
      'modal',
      this.classes
    );

    this.modalCloseBtn = this.createDomNode(
      this.modalContent,
      'span',
      null,
      this.modal,
      'modal__close-icon'
    );
    const colorBtn = colorCloseBtn || '#0C0C0E';
    this.modalCloseBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none"><path d="M2 16.8507L17 2.00001" stroke=${colorBtn} stroke-width="3"/><path d="M2 2.14928L17 17" stroke=${colorBtn} stroke-width="3"/></svg>`;

    this.modalContent = this.createDomNode(
      this.modalContent,
      'div',
      null,
      this.modal,
      'modal__content'
    );

    this.setContent(content);

    this.openModal();

    this.bindEvents();
  }

  setContent(content) {
    if (typeof content === 'string') {
      this.modalContent.innerHTML = content;
    } else {
      this.modalContent.innerHTML = '';
      this.modalContent.append(content);
    }
  }

  openModal() {
    document.body.append(this.overlay);
    document.querySelector('body').classList.add('open');
  }

  bindEvents() {
    this.overlay.addEventListener('click', this.closeModal);
  }

  closeModal(e) {
    let classes = e.target.classList;
    if (classes.contains('overlay') || classes.contains('modal__close-icon')) {
      document.querySelector('.overlay').remove();
      document.querySelector('body').classList.remove('open');
    }
  }
}

export default Modal;
