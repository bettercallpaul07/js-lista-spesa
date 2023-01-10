
const gList = [
    'Pane',
    'Latte',
    'Acqua',
    'Zucchero',
    'Biscotti'
]

const groceryList = document.getElementById('grocery-list');

let i = 0;

while (i < gList.length) {
    const liEl = document.createElement('li');
    liEl.innerHTML = gList[i];
    groceryList.append(liEl);
    i++;
}