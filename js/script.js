
const cross = document.getElementById('cancel').addEventListener('click', removeItem);

function removeItem(e) {
    let item = document.getElementById("cancel");
    item.parentNode.style.display="none";
}

let p = [];
// get all prices for all items
const items = document.getElementsByClassName('price-row');
for (let i = 0; i < items.length; i++) {
    p.push(items[i].textContent);
}


const price = arr => p.map(Number);
console.log(price);
console.log(p)
