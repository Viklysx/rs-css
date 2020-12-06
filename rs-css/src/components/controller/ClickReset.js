import Name from './Name';
import ClickSelector from './ClickSelector';

class ClickReset {
    constructor(element) {
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
        element.addEventListener('click', function () {
            for (let i = 1; i < 14; i++) {
                localStorage.removeItem(`fruitsSelectors_${i}`);
            }
            localStorage.setItem(`fruitsSelectors`, '1');
            const levelsAll = document.querySelectorAll('.menu-list');
            levelsAll.forEach(key => {
                key.classList.remove('succes');
                key.classList.remove('active');
            });
            levelsAll[1].classList.add('active');
            const blockCode = document.querySelector('.code-block-code__content');
            const fruits = document.querySelector('.animation');
            blockCode.innerHTML = '';
            fruits.innerHTML = '';
            const codeEvent = new Name(blockCode, fruits, arr);
            const restart = new ClickSelector();
        });
    }
}

export default ClickReset;