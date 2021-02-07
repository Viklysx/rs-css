import Interface from './Interface';

class CodeForm {
    constructor() {}

    codeBlock() {
        const display = new Interface();
        const block = display.createElements({
            node: 'div',
            class: 'code-block'
        });
        const codeHeader = display.createElements({
            node: 'div',
            class: 'code-header'
        });
        const codeHeaderTextLeft = display.createElements({
            node: 'div',
            class: 'code-header__text'
        });
        const codeHeaderTextRight = display.createElements({
            node: 'div',
            class: 'code-header__text'
        });
        const blockCode = display.createElements({
            node: 'div',
            class: 'code-block-code'
        });
        const blockCodeNumbers = display.createElements({
            node: 'div',
            class: 'code-block-code__numbers'
        });
        const blockCodeContent = display.createElements({
            node: 'div',
            class: 'code-block-code__content'
        });

        codeHeaderTextLeft.textContent = 'HTML Viewer';
        codeHeaderTextRight.textContent = 'index.html';

        blockCodeNumbers.innerHTML =
            `<span class="code-block-numbers">1</span>
            <span class="code-block-numbers">2</span>
            <span class="code-block-numbers">3</span>
            <span class="code-block-numbers">4</span>
            <span class="code-block-numbers">5</span>
            <span class="code-block-numbers">6</span>
            <span class="code-block-numbers">7</span>
            <span class="code-block-numbers">8</span>
            <span class="code-block-numbers">9</span>
            <span class="code-block-numbers">10</span>
            <span class="code-block-numbers">11</span>
            <span class="code-block-numbers">12</span>
            <span class="code-block-numbers">13</span>
            <span class="code-block-numbers">14</span>
            <span class="code-block-numbers">15</span>`;

        codeHeader.append(codeHeaderTextLeft, codeHeaderTextRight);
        blockCode.append(blockCodeNumbers, blockCodeContent);
        block.append(codeHeader, blockCode);

        return block;
    }

}

export default CodeForm;