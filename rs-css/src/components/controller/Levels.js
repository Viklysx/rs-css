class Levels {
    constructor(listElement) {
        this.root = root;
        this.listElement = listElement;
        this.clickLevel(this.listElement);
  }

  clickLevel(item) {
    item.addEventListener('click', () => {
        const itemAll = this.root.lastChild.firstChild.firstChild.firstChild.childNodes;
        itemAll.forEach(key => {
            key.classList.remove('active')
        });
        item.classList.add('active');
    })
  }
}
 
export default Levels;