class Controller {
    constructor(parentNode, tag = 'div', className = '', content = '') {
        this.node = document.createElement(tag);
        this.node.className = className;
        this.node.innerHTML = content;
        console.log(this.node)
        if (parentNode) parentNode.appendChild(this.node);
      }
}

export default Controller;