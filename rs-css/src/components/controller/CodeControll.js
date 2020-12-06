import Name from './Name';
import ClickSelector from './ClickSelector';

class CodeControll {
    constructor() {
        this.arr = {
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

    codeEvents() {
        const codeEvent = new Name(document.querySelector('.code-block-code__content'), document.querySelector('.animation'), this.arr);
        const checkSelector = new ClickSelector();
    }
}

export default CodeControll;