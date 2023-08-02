class FavoritesCard {
  createDomNode(node, element, text, parentNode, ...classes) {
    node = document.createElement(element);
    node.classList.add(...classes);

    if (text) node.textContent = text;
    if (parentNode) parentNode.append(node);

    return node;
  }

  createDomNodeButton(node, disabled, parentNode, ...classes) {
    node = document.createElement('button');
    node.type = 'button';
    node.disabled = disabled;
    node.textContent = !disabled ? 'Buy' : 'Own';
    node.classList.add(...classes);

    parentNode.append(node);

    return node;
  }

  createDomNodeImage(node, src, parentNode, ...classes) {
    node = document.createElement('img');
    node.src = src;
    node.alt = 'book';
    node.classList.add(...classes);

    parentNode.append(node);

    return node;
  }
}

export default FavoritesCard;