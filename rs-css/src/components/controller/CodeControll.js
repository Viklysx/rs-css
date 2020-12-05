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
                    name: 'apple'
                },
                {
                    name: 'orange'
                },
                {
                    name: 'lemon'
                },
                {
                    name: 'pear'
                },
            ]
        };
    }

    codeEvents() {
        const codeEvent = new Name(document.querySelector('.code-block-code__content'), document.querySelector('.animation'), this.arr);
    }
}

export default CodeControll;