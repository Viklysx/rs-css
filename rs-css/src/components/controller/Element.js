import Controller from './Controller';

class Element extends Controller {
  constructor(parentNode, className, content) {
    super(parentNode, 'div', className, content);
    this.node.onmousemove = () => {
      this.node.className = 'action';
    };
    this.node.onmouseleave = () => {
      this.node.className = className;
    };
;  }
}

export default Element;