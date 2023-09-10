class Element {
  createDomNode(node, element, text, parentNode, ...classes) {
    node = document.createElement(element);
    node.classList.add(...classes);

    if (text) node.textContent = text;
    if (parentNode) parentNode.append(node);

    return node;
  }

  createDomNodeButton(node, text, disabled, parentNode, ...classes) {
    node = document.createElement('button');
    node.type = 'button';
    node.disabled = disabled;
    node.textContent = text ? text : !disabled ? 'Buy' : 'Own';
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

  createDomNodeInput(
    node,
    name,
    type,
    placeholder,
    value,
    parentNode,
    ...classes
  ) {
    node = document.createElement('input');
    node.autocomplete = 'off';
    node.name = name;
    node.type = type;
    node.placeholder = placeholder;
    if (value) node.value = value;
    node.classList.add(...classes);

    parentNode.append(node);

    return node;
  }
}

export default Element;
