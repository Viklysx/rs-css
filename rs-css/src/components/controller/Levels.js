import Name from './Name';
import ClickSelector from './ClickSelector';

class Levels {
    constructor(listElement) {
        this.root = root;
        this.listElement = listElement;
        this.clickLevel(this.listElement);
        this.levelsCode = [
            {},
            {
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
            },
            {
                name: 'table',
                childs: [{
                        name: 'apple',
                        id: 'fruits',
                        animation: true 
                    },
                    {
                        name: 'orange',
                        animation: false 
                    },
                    {
                        name: 'lemon',
                        animation: false
                    }
                ],
                text: 'Укажи селектор, чтобы выбрать элемент с id.'
            },
            {
                name: 'table',
                childs: [{
                        name: 'apple',
                        animation: false 
                    },
                    {
                        name: 'orange',
                        class: 'vitamin',
                        animation: true 
                    },
                    {
                        name: 'lemon',
                        animation: false
                    }
                ],
                text: 'Укажи селектор, чтобы выбрать элемент с классом «vitamin».'
            },
            {
                name: 'table',
                childs: [{
                        name: 'apple',
                        animation: false 
                    },
                    {
                        name: 'orange',
                        animation: false 
                    },
                    {
                        name: 'lemon',
                        animation: true
                    }
                ],
                text: 'Укажи верный селектор, который выделен на картинке и является одним из дочерних y table.'
            },
            {
                name: 'table',
                childs: [{
                        name: 'apple',
                        animation: true 
                    },
                    {
                        name: 'blueberry',
                        animation: false 
                    },
                    {
                        name: 'apple',
                        animation: true
                    }
                ],
                text: 'Укажи верный селектор, чтобы он относился к анимированным фруктам.'
            },
            {
                name: 'table',
                childs: [{
                        name: 'pear',
                        animation: false 
                    },
                    {
                        name: 'blueberry',
                        animation: true 
                    },
                    {
                        name: 'pear',
                        animation: false
                    },
                    {
                        name: 'blueberry',
                        animation: true 
                    },
                ],
                text: 'Укажи верный селектор, который выберет элемент, следующий сразу после pear.'
            },
            {
                name: 'table',
                childs: [{
                        name: 'lemon',
                        animation: false 
                    },
                    {
                        name: 'lemon',
                        animation: false
                    },
                    {
                        name: 'plate',
                        animation: false,
                        childs: [{
                            name: 'pear',
                            animation: true,
                        }],
                    },
                ],
                text: 'Выбери селектор, дочерний для plate.'
            },
            {
                name: 'table',
                childs: [{
                        name: 'plate',
                        animation: false 
                    },
                    {
                        name: 'orange',
                        animation: true
                    },
                    {
                        name: 'lemon',
                        animation: false
                    },
                    {
                        name: 'blueberry',
                        animation: false 
                    },
                ],
                text: 'Укажи селектор, который выберет все orange, следующие за plate.'
            },
            {
                name: 'table',
                childs: [{
                        name: 'apple',
                        animation: true 
                    },
                    {
                        name: 'orange',
                        animation: false,
                        class: 'vitamin',
                    },
                    {
                        name: 'orange',
                        animation: false,
                        class: 'fruit',
                    },
                    {
                        name: 'blueberry',
                        animation: true 
                    },
                ],
                text: 'Укажи селектор, который выберет все элементы, кроме тех, у кого присвоены классы .vitamin и .fruit.'
            },
            {
                name: 'table',
                childs: [{
                        name: 'orange',
                        animation: false 
                    },
                    {
                        name: 'lemon',
                        animation: false
                    },
                    {
                        name: 'lemon',
                        animation: true
                    },
                    {
                        name: 'lemon',
                        animation: false
                    },
                ],
                text: 'Укажи селектор, который выберет второй элемент lemon.'
            },
            {
                name: 'table',
                childs: [{
                        name: 'orange',
                        animation: false 
                    },
                    {
                        name: 'plate',
                        animation: false,
                        childs: [{
                            name: 'lemon',
                            animation: false,
                        }],
                    },
                    {
                        name: 'blueberry',
                        animation: false
                    },
                    {
                        name: 'blueberry',
                        animation: true
                    },
                ],
                text: 'Укажи селектор, который выберет последний элемент blueberry.'
            },
            {
                name: 'table',
                childs: [{
                        name: 'apple',
                        animation: true 
                    },                  
                    {
                        name: 'blueberry',
                        animation: false
                    },
                    {
                        name: 'plate',
                        animation: false,
                        childs: [{
                            name: 'orange',
                            animation: false,
                        }],
                    },
                    {
                        name: 'blueberry',
                        animation: false
                    },
                ],
                text: 'Укажи селектор, который выберет первый дочерний элемент table (apple).'
            },
            {
                name: 'table',
                childs: [{
                        name: 'plate',
                        animation: false 
                    },                  
                    {
                        name: 'plate',
                        animation: false
                    },
                    {
                        name: 'plate',
                        animation: false,
                        childs: [{
                            name: 'orange',
                            animation: false,
                        }],
                    },
                    {
                        name: 'blueberry',
                        animation: true
                    },
                ],
                text: 'Укажи селектор, который выберет последний дочерний элемент table.'
            }
        ]
  }

  clickLevel(item) {
    item.addEventListener('click', () => {
        this.transitionLevels(item);
    })
  }

  transitionLevels(item) {
    const itemAll = this.root.lastChild.firstChild.firstChild.firstChild.childNodes;
    itemAll.forEach(key => {
        key.classList.remove('active')
    });
    item.classList.add('active');
    const level = item.getAttribute('data-level');
    const blockCode = document.querySelector('.code-block-code__content');
    const fruits = document.querySelector('.animation');
    blockCode.innerHTML = '';
    fruits.innerHTML = '';
    localStorage.setItem('fruitsSelectors', level);
    const codeEvent = new Name(document.querySelector('.code-block-code__content'), document.querySelector('.animation'), this.levelsCode[level]);
    const checkSelector = new ClickSelector();
  }
}
 
export default Levels;