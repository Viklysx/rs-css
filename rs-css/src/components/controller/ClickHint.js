class ClickHint {
    constructor(element) {
        const inputSelector = root.firstChild.childNodes[1].firstChild.firstChild.firstChild;
        const levelsAndSelectors = [null, '*', '#fruits', '.vitamin', 'table lemon', 'apple', 'pear + blueberry', 'plate > pear', 'plate ~ orange',
            'table:not(.vitamin, .fruit)', 'table lemon:nth-child(2)', 'table blueberry:nth-last-child(1)', 'table:first-child', 'table:last-child'
        ];
        element.addEventListener('click', function () {
            const level = localStorage.getItem(`fruitsSelectors`);
            inputSelector.value = levelsAndSelectors[Number(level)];            
        });
    }
}

export default ClickHint;