import Interface from './Interface';

class FruitsBlock {
    constructor() {}

    fruitsBlock() {
        const display = new Interface();
        const block = display.createElements({
            node: 'div',
            class: 'table'
        });
        const apple = display.createElements({
            node: 'div',
            class: 'apple'
        });
        const orange = display.createElements({
            node: 'div',
            class: 'orange'
        });
        const lemon = display.createElements({
            node: 'div',
            class: 'lemon'
        });
        const pear = display.createElements({
            node: 'div',
            class: 'pear'
        });

        const listItem = localStorage.getItem('fruitsSelectors');

        if (1 == listItem) {
            apple.classList.add('animation-rotate');
            orange.classList.add('animation-rotate');
            lemon.classList.add('animation-rotate');
            pear.classList.add('animation-rotate');
        }
        // const blueberry = display.createElements({
        //     node: 'div',
        //     class: 'blueberry'
        // });

        block.append(apple, orange, lemon, pear);

        return block;
    }

}

export default FruitsBlock;