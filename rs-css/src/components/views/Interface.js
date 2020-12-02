class Interface {
    constructor() {
        this.root = root;
    }

    main() {
        const main = this.createElements({node: 'div', class: 'main'});
        const menu = this.createElements({node: 'div', class: 'levels'});
        const buttonReset = this.createElements({node: 'button', content: 'Сбросить', class: 'reset'});
        const info = this.createElements({node: 'div', content: 'Тут описание задания',class: 'info'});
        menu.append(this.menu(), info, buttonReset);
        this.root.append(main, menu);
    }

    menu() {
        const wrapper = this.createElements({node: 'div', class: 'menu'});
        const wrapperList = this.createElements({node: 'div'});
        const wrapperReset = this.createElements({node: 'div'});       
        const list = this.createElements({node: 'ol', class: 'menu-list'});
        const massLevel = ['*', '#X', '.X', 'X Y', 'X', 'X + Y', 'Х > Y', 'X ~ Y', 'X:not(selector)', 'X:nth-child(n)', 'X:nth-last-child(n)','X:first-child', 'X:last-child'];
        for (let i = 1; i < 14; i++) {
            const listElement = this.createElements({node: 'li', class: 'menu-list li', content: `${i}. ${massLevel[i-1]}`});
            list.append(listElement);
        }
        wrapperList.append(list);
        wrapper.append(wrapperList, wrapperReset);
        return wrapper;
    }

    createElements(options) {
        this.elem = document.createElement(options.node);
        this.elem.className = options.class;
        if (options.content) {
            this.elem.textContent = options.content;
        }
        return this.elem;
    }


}

export default Interface;