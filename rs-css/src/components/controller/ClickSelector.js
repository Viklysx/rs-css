import ClickListener from './ClickListener';

class ClickSelector {
    constructor() {
        this.checkSelector();
    }

    checkSelector() {
        const levelsAndSelectors = [null, '*', '#fruits', '.vitamin', 'table lemon', 'apple', 'pear + blueberry', 'plate > pear', 'plate ~ orange',
            'table:not(.vitamin, .fruit)', 'table lemon:nth-child(2)', 'table blueberry:nth-last-child(1)', 'table:first-child', 'table:last-child'
        ];
        const inputSelector = root.firstChild.childNodes[1].firstChild.firstChild.firstChild;
        const checkSelector = root.firstChild.childNodes[1].firstChild.firstChild.lastChild;
        const levels = document.querySelectorAll('.menu-list');
        inputSelector.oninput = () => {
            if (inputSelector.value !== '') {
                inputSelector.classList.remove('input-flash');
            } else {
                inputSelector.classList.add('input-flash');
            }
        };
        const listItem = localStorage.getItem('fruitsSelectors');
        inputSelector.onkeydown = function (e) {          
            if (e.keyCode === 13) {
                const events = new  ClickListener(listItem, inputSelector, levelsAndSelectors, levels);
            }
        };
        checkSelector.onclick = function () { 
            const eventsButton = new  ClickListener(listItem, inputSelector, levelsAndSelectors, levels);
        };
        inputSelector.value = '';
        inputSelector.classList.add('input-flash');
    }
}

export default ClickSelector;