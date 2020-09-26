// select elements
const numOfItems = document.querySelectorAll('input[type="number"]')
const totalEl = document.getElementById('total-price')
const itemPrice = document.querySelector('.price-cont')

// 

let totalPrice = 0;

// functions
function selectElments(e) {
  let v = Number(e.target.value)
  console.log(v)
  let p = e.target.parentElement.parentElement.nextElementSibling.firstElementChild.innerHTML;
  let currentItemPrice = Number(p.substring(1, p.length))
  console.log(currentItemPrice)

  updateTotalPrice(v, currentItemPrice);
}

// update total price

function updateTotalPrice(num, price) {
  let res = num * price;
  const prices = {
    "price": "${res}"
  }
  localStorage.setItem('prices', JSON.stringify(prices))
  totalEl.innerText = res;
}

// events
(function() {
  numOfItems.forEach((item) => {
    item.addEventListener('input', selectElments);
  })
})()

// debug

// console.log(total.textContent)
