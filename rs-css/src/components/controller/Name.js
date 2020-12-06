import Control from './Controller';
import Element from './Element';

class Name extends Control {
    constructor(parentNode, parentNode1, obj) {
        super(parentNode, 'div', 'code-block-left');
        this.childs = [];
        this.name = obj.name;
        this.text = obj.text;

        let strParam;
        if (obj.id) {
            strParam = `&lt${obj.name} id = "${obj.id}"&gt;`;
        }
        else if (obj.class) {
            strParam = `&lt${obj.name} class = "${obj.class}"&gt;`;
        }
        else strParam = `&lt${obj.name}&gt;`;
        const elem = new Element(this.node, 'code-block-left', strParam);
        const info = document.querySelector('.info');
        let cont;
        if (this.text) {
            info.innerHTML = this.text;
        };       
        if (obj.name !== 'table') {
            if (obj.animation === true) {
                cont = new Control(parentNode1, obj.name, `${obj.name} animation-rotate`);
            }
            else cont = new Control(parentNode1, obj.name, `${obj.name}`);           
        } else cont = new Control(parentNode1, obj.name, `${obj.name}`);

        if (Array.isArray(obj.childs) && obj.childs.length) {
            obj.childs.forEach((item) => {
                this.childs.push(new Name(this.node, cont.node, item));
            });
        }

        const elem2 = new Element(this.node, 'code-block-left', '&lt;' + '/' + obj.name + '&gt;');
        this.elem = elem;
        this.elem2 = elem2;
        this.cont = cont;

        const setAction = (n, act, mtr, ntj) => {
            if (obj.name !== 'table') {
                if (obj.animation === true) {
                    if (!ntj) n.cont.node.className = mtr ? `${obj.name} animation-rotate action-friuts` : `${obj.name} animation-rotate`;
                }
                else {
                    if (!ntj) n.cont.node.className = mtr ? `${obj.name} action-friuts` : `${obj.name}`;
                }
                this.onChildAction && this.onChildAction(n, act);
                n.elem.node.className = act;
                n.elem2.node.className = act;
                n.childs.length &&
                    n.childs.forEach((it) => {
                        setAction(it, act, mtr, true);
                    });
            }
        };

        elem.node.onmousemove = () => {
            setAction(this, 'action', true);
            this.onHover && this.onHover(this);
        };
        elem.node.onmouseleave = () => {
            setAction(this, 'code-block-left');
            this.onLeave && this.onLeave(this);
        };

        elem2.node.onmousemove = elem.node.onmousemove;
        elem2.node.onmouseleave = elem.node.onmouseleave;

        cont.node.addEventListener('mousemove', (e) => {
            e.stopPropagation();
            elem.node.onmousemove();
        });

        cont.node.addEventListener('mouseout', (e) => {
            e.stopPropagation();
            elem.node.onmouseleave();
        });

        this.onHover = () => {};
        this.onLeave = () => {};
    }

}

export default Name;