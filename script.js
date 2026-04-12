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
            listItem.innerHTML = `
                <span>${itemName} - ${price} บาท</span>
                <div class="quantity-controls">
                    <button class="minus-btn">-</button>
                    <span class="qty">1</span>
                    <button class="plus-btn">+</button>
                </div>
            `;

            cartList.appendChild(listItem);

            const plusBtn = listItem.querySelector('.plus-btn');
            const minusBtn = listItem.querySelector('.minus-btn');
            const qtyDisplay = listItem.querySelector('.qty');


                total += price;
                totalDisplay.textContent = 'Total: ' + total + ' บาท';
        
        plusBtn.addEventListener('click', () => {
                let qty = parseInt(qtyDisplay.textContent); 
                qtyDisplay.textContent = ++qty;              
                total += price;                           
                totalDisplay.textContent = 'Total: ' + total + ' บาท';
        });
        minusBtn.addEventListener('click', () => {
        let qty = parseInt(qtyDisplay.textContent);
                if (qty > 1) {
                    qtyDisplay.textContent = --qty;          
                    total -= price;                          
                    totalDisplay.textContent = 'Total: ' + total + ' บาท';
    }
        });

        const checkoutBtn = document.querySelector('.checkout-btn');

        checkoutBtn.addEventListener('click', () => {
            if (total === 0) {
                alert('คุณยังไม่ได้สั่งสินค้า');
                return;
            }

            const confirmPay = confirm(`ยอดรวมทั้งหมดคือ ${total} บาท ยืนยันการสั่งซื้อ?`);

            if (confirmPay) {
                alert('ขอบคุณที่ใช้บริการ ☕✨');
                cartList.innerHTML = '<li>No items yet</li>';              
                total = 0;
                totalDisplay.textContent = 'Total: 0 บาท';
            }
        });
            

        alert('คุณสั่ง ' + itemName + ' เรียบร้อย!');
    });
});