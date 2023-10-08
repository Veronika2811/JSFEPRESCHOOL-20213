import {createDomNode} from '../utils/createDomNode.js';

class Modal {
  constructor(classes) {
    this.classes = classes;
  }

  buildModal(content, colorCloseBtn) {
    this.overlay = createDomNode(this.overlay, 'div', null, null, 'overlay');

    this.modal = createDomNode(
      this.modal,
      'div',
      null,
      this.overlay,
      'modal',
      this.classes
    );

    this.modalContent = createDomNode(
      this.modalContent,
      'div',
      null,
      this.modal,
      'modal__content'
    );

    this.setContent(content);

    this.openModal();
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

  closeModal() {
    document.querySelector('.overlay').remove();
    document.querySelector('body').classList.remove('open');
  }
}

export default Modal;
