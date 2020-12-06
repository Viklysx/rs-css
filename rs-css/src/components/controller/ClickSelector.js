import Levels from './Levels';

class ClickSelector {
    constructor() {
        this.checkSelector();

    }

    checkSelector() {
        const levelsAndSelectors = [null, '*', '#fruits', '.vitamin', 'table lemon', 'apple', 'pear + blueberry', 'plate > pear', 'plate ~ orange',
            'table:not(.vitamin, .fruit)', 'table lemon:nth-child(2)', 'table blueberry:nth-last-child(1)', 'table:first-child', 'table:last-child'
        ];
        const inputSelector = root.firstChild.childNodes[1].firstChild.firstChild.firstChild;
        const levels = document.querySelectorAll('.menu-list');
        inputSelector.oninput = () => {
            if (inputSelector.value !== '') {
                inputSelector.classList.remove('input-flash');
            } else {
                inputSelector.classList.add('input-flash');
            }
        };
        inputSelector.addEventListener('keydown', function (e) {
            const listItem = localStorage.getItem('fruitsSelectors');
            if (e.keyCode === 13) {
                if (inputSelector.value.trim() !== levelsAndSelectors[Number(listItem)]) {
                    const code = document.querySelector('.code-block__input');
                    code.classList.add('shaking');
                    setTimeout(() => {
                        code.classList.remove('shaking');
                    }, 1000);
                } else {
                    levels[Number(listItem)].classList.remove('active');
                    levels[Number(listItem)].classList.add('succes');
                    const animationFruit = document.querySelectorAll('.animation-rotate');
                    animationFruit.forEach(key => {
                        key.classList.remove('animation-rotate');
                        key.classList.add('hidden-fruits');
                    });
                    setTimeout(() => {
                        const level = new Levels(levels[Number(listItem)]);
                        level.transitionLevels(levels[Number(listItem) + 1]);
                    }, 2000);
                };
            }
        });
        inputSelector.value = '';
        inputSelector.classList.add('input-flash');
    }
}

export default ClickSelector;