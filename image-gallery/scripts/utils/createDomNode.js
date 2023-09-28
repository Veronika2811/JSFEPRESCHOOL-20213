const createDomNode = (node, element, text, parentNode, ...classes) => {
  node = document.createElement(element);
  node.classList.add(...classes);

  if (text) node.textContent = text;
  if (parentNode) parentNode.append(node);

  return node;
}

const createDomNodeImage = (node, src, alt, parentNode, ...classes) => {
  node = document.createElement('img');
  node.src = src;
  node.alt = alt;
  node.classList.add(...classes);

  parentNode.append(node);

  return node;
}

export {createDomNode, createDomNodeImage};