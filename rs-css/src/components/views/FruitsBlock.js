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
        const blueberry = display.createElements({
            node: 'div',
            class: 'blueberry'
        });

        block.append(apple, orange, lemon, pear, blueberry);

        return block;
    }

}

export default FruitsBlock;