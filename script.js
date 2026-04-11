const addButtons = document.querySelectorAll('.card button');
const cartList = document.querySelector('.cart-list');
const totalDisplay = document.querySelector('.summary p');
let total = 0;

addButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const card = btn.parentElement;
        const itemName = card.querySelector('h3').textContent;
    
        const itemPriceText = card.querySelector('p').textContent;
        const price = parseInt(itemPriceText.replace('Price: ', '')); 

        if (cartList.innerHTML.includes('No items yet')) {
            cartList.innerHTML = '';
        }

        const listItem = document.createElement('li');
        listItem.textContent = itemName + ' - ' + price + ' บาท';
        cartList.appendChild(listItem);

        total += price;
        totalDisplay.textContent = 'Total: ' + total + ' บาท';
    

        alert('คุณสั่ง ' + itemName + ' เรียบร้อย!');
    });
});