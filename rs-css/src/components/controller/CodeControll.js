import Name from './Name';

class CodeControll {
    constructor() {
        // this.arr = {
        //     name: 'table',
        //     childs: [
        //     {
        //       name: 'plate',
        //       childs: [],
        //     },
        //     {
        //       name: 'plate',
        //       childs: [{
        //         name: 'pickle',
        //         childs: [],
        //       },
        //       {
        //         name: 'pickle',
        //         childs: [{
        //           name: 'orange',
        //           childs: [],
        //         },],
        //       },
        //       {
        //         name: 'pickle',
        //         childs: [],
        //       },],
        //     },
        //     {
        //       name: 'plate',
        //       childs: [],
        //     },
        //   ]
        //   }; 
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
    }
}

export default CodeControll;