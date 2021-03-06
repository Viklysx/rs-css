import Footer from './Footer';
import CodeForm from './CodeForm';
import Selector from './Selector';
import CodeControll from '../controller/CodeControll';
import Levels from '../controller/Levels';
import ClickReset from '../controller/ClickReset';
import ClickHint from '../controller/ClickHint';

class Interface {
    constructor() {
        this.root = root;
        const arr = {
            name: 'table',
            childs: [{
                    name: 'apple',
                    animation: true
                },
                {
                    name: 'orange',
                    animation: true
                },
                {
                    name: 'lemon',
                    animation: true
                },
                {
                    name: 'pear',
                    animation: true
                },
            ],
            text: 'Укажи селектор, чтобы выбрать все элементы.'
        };
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
        const buttonHint = this.createElements({
            node: 'button',
            content: 'Подсказка',
            class: 'hint'
        });
        const info = this.createElements({
            node: 'div',
            content: 'Для старта нажми на любой уровень.',
            class: 'info final'
        });

        if (localStorage.getItem('fruitsSelectors') !== null) {
            info.classList.remove('final');
        }
        const footerBlock = new Footer();
        const codeBlock = new CodeForm();
        const inputBlock = new Selector();

        author.append(footerBlock.footerBlock());
        code.append(codeBlock.codeBlock());
        input.append(inputBlock.inputBlock());

        main.append(animation, input, code, author);
        menu.append(this.menu(), info, buttonReset, buttonHint);

        this.root.append(main, menu);

        const contr = new CodeControll();
        const reset = new ClickReset(buttonReset);
        const hint = new ClickHint(buttonHint);
        contr.codeEvents();
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
        const listItem = localStorage.getItem('fruitsSelectors');
        const massLevel = ['*', '#X', '.X', 'X Y', 'X', 'X + Y', 'Х > Y', 'X ~ Y', 'X:not(selector)', 'X:nth-child(n)', 'X:nth-last-child(n)', 'X:first-child', 'X:last-child'];
        for (let i = 1; i < 14; i++) {
            const listElement = this.createElements({
                node: 'li',
                class: 'menu-list li',
                content: `${i}. ${massLevel[i-1]}`,
                dataLevel: i
            });
            if (i == listItem) {
                listElement.classList.add('active');                       
            }
            list.append(listElement);
            const levelButtons = new Levels(listElement);      
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
        if (options.dataLevel) {
            this.elem.setAttribute('data-level', options.dataLevel);
        }
        return this.elem;
    }


}

export default Interface;