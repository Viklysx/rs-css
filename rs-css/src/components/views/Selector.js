import Interface from './Interface';

class Selector {
    constructor() {}

    inputBlock() {
        const display = new Interface();
        const block = display.createElements({
            node: 'div',
            class: 'code-block code-block__input'
        });
        const blockCode = display.createElements({
            node: 'div',
            class: 'code-block-code input-code'
        });
        const inputText = display.createElements({
            node: 'input',
            type: 'text',
            placeholder: 'Type in a CSS selector',
            class: 'input-flash'
        });
        const enterSelector = display.createElements({
            node: 'div',
            class: 'click-selector',
            content: 'проверить'
        });

        blockCode.append(inputText, enterSelector);
        block.append(blockCode);

        return block;
    }

}

export default Selector;