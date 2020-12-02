import Footer from './Footer';
import CodeForm from './CodeForm';
import Selector from './Selector';

class Interface {
    constructor() {
        this.root = root;
    }

    main() {
        const main = this.createElements({
            node: 'div',
            class: 'main'
        });
        const menu = this.createElements({
            node: 'div',
            class: 'levels'
        });
        const animation = this.createElements({
            node: 'section',
            class: 'animation'
        });
        const input = this.createElements({
            node: 'section',
            class: 'input-selector'
        });
        const code = this.createElements({
            node: 'section'
        });
        const author = this.createElements({
            node: 'footer'
        });
        const buttonReset = this.createElements({
            node: 'button',
            content: 'Сбросить',
            class: 'reset'
        });
        const info = this.createElements({
            node: 'div',
            content: 'Тут описание задания',
            class: 'info'
        });
        const footerBlock = new Footer();
        const codeBlock = new CodeForm();
        const inputBlock = new Selector();

        author.append(footerBlock.footerBlock());
        code.append(codeBlock.codeBlock());
        input.append(inputBlock.inputBlock());

        main.append(animation, input, code, author);
        menu.append(this.menu(), info, buttonReset);

        this.root.append(main, menu);
    }

    menu() {
        const wrapper = this.createElements({
            node: 'div',
            class: 'menu'
        });
        const wrapperList = this.createElements({
            node: 'div'
        });
        const wrapperReset = this.createElements({
            node: 'div'
        });
        const list = this.createElements({
            node: 'ol',
            class: 'menu-list'
        });
        const massLevel = ['*', '#X', '.X', 'X Y', 'X', 'X + Y', 'Х > Y', 'X ~ Y', 'X:not(selector)', 'X:nth-child(n)', 'X:nth-last-child(n)', 'X:first-child', 'X:last-child'];
        for (let i = 1; i < 14; i++) {
            const listElement = this.createElements({
                node: 'li',
                class: 'menu-list li',
                content: `${i}. ${massLevel[i-1]}`
            });
            list.append(listElement);
        }

        wrapperList.append(list);
        wrapper.append(wrapperList, wrapperReset);
        return wrapper;
    }

    createElements(options) {
        this.elem = document.createElement(options.node);
        if (options.content) {
            this.elem.textContent = options.content;
        }
        if (options.class) {
            this.elem.className = options.class;
        }
        if (options.type) {
            this.elem.type = options.type;
        }
        if (options.placeholder) {
            this.elem.setAttribute('placeholder', options.placeholder);
        }
        return this.elem;
    }


}

export default Interface;