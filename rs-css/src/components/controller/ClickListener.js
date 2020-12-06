import Levels from './Levels';

class ClickListener {
    constructor(listItem, inputSelector, levelsAndSelectors, levels) {
        this.root = document;
        if (inputSelector.value.replace(/ /g, '') !== levelsAndSelectors[Number(listItem)].replace(/ /g, '')) {
            const code = this.root.querySelector('.code-block__input');
            code.classList.add('shaking');
            setTimeout(() => {
                code.classList.remove('shaking');
            }, 1000);           
        } else {
            levels[Number(listItem)].classList.remove('active');
            levels[Number(listItem)].classList.add('succes');
            localStorage.setItem(`fruitsSelectors_${listItem}`, listItem);
            const animationFruit = this.root.querySelectorAll('.animation-rotate');
            animationFruit.forEach(key => {
                key.classList.remove('animation-rotate');
                key.classList.add('hidden-fruits');
            });
            let flag = 0;
            for (let i = 1; i < 14; i++) {
                if (localStorage.getItem(`fruitsSelectors_${i}`) !== null) {
                    flag++;
                }
            }
            if (listItem != '13') {
                setTimeout(() => {
                    const level = new Levels(levels[Number(listItem)]);
                    level.transitionLevels(levels[Number(listItem) + 1]);
                }, 2000);
            }
            else if (listItem == '13' || flag == 14) {
                this.root.querySelector('.info').classList.add('final');
                this.root.querySelector('.info').innerHTML = 'Ура! Игра окончена!';
            }           
        }; 
    }
}

export default ClickListener;