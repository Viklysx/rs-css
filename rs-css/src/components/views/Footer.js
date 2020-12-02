import Interface from './Interface';

class Footer {
    constructor() {}

    footerBlock() {
        const display = new Interface();
        const author = display.createElements({
            node: 'div',
            class: 'author-block'
        });
        author.innerHTML =
            `Автор: <a href="https://github.com/Viklysx" target="_blank">Вика Лысенко</a>, 2020`;
        const course = display.createElements({
            node: 'div'
        });
        course.innerHTML =
            `<a href="https://rs.school/js/" target="_blank"><img src="./img/rs_school_js.svg" alt="school" width="10%"></a>`;
        const wrapper = display.createElements({
            node: 'div',
            class: 'author'
        });

        wrapper.append(author, course);

        return wrapper;
    }
}

export default Footer;