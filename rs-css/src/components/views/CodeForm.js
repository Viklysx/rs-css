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
            `1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10<br>11<br>12<br>13<br>14<br>15`;
        blockCodeContent.textContent = 
            `<div>div class="table"&gt;<div class="">&lt;apple /&gt;</div><div class="">&lt;apple  class="small" /&gt;</div><div class="">&lt;bento&gt;<div class="">&lt;orange  class="small" /&gt;</div>&lt;/bento&gt;</div><div class="">&lt;plate&gt;<div class="">&lt;orange /&gt;</div>&lt;/plate&gt;</div><div class="">&lt;plate&gt;<div class="">&lt;orange  class="small" /&gt;</div>&lt;/plate&gt;</div>&lt;/div&gt;`

        codeHeader.append(codeHeaderTextLeft, codeHeaderTextRight);
        blockCode.append(blockCodeNumbers, blockCodeContent);
        block.append(codeHeader, blockCode);

        return block;
    }

}

export default CodeForm;