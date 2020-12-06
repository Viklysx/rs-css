import Levels from './Levels';

class ClickListener {
    constructor(listItem, inputSelector, levelsAndSelectors, levels) {
        this.root = document;
        console.log(inputSelector.value, levelsAndSelectors[Number(listItem)]);
        if (inputSelector.value.replace(/ /g, '') !== levelsAndSelectors[Number(listItem)].replace(/ /g, '')) {
            const code = this.root.querySelector('.code-block__input');
            code.classList.add('shaking');
            setTimeout(() => {
                code.classList.remove('shaking');
            }, 1000);           
        } else {
            console.log(inputSelector.value.replace(/ /g, ''), levelsAndSelectors[Number(listItem)].replace(/ /g, ''));
            levels[Number(listItem)].classList.remove('active');
            levels[Number(listItem)].classList.add('succes');
            localStorage.setItem(`fruitsSelectors_${listItem}`, listItem);
            const animationFruit = this.root.querySelectorAll('.animation-rotate');
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
}

export default ClickListener;