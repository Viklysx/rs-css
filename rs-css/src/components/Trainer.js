class Trainer {
    constructor(view, controller) {
        this.view = view;
        this.controller = controller;
        this.view.main();
        if (localStorage.getItem('fruitsSelectors') == null) localStorage.setItem('fruitsSelectors', '1');
    }
}

export default Trainer;