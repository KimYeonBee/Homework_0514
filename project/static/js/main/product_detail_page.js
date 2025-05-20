/* product detail page - JS */
const minusBtn = document.getElementById("minus");
const plusBtn = document.getElementById("plus");
const totalCount1 = document.getElementById("totalCount");
let totalCount = parseInt(totalCount1.textContent);

minusBtn.addEventListener("click", () => {
    if (totalCount <= 1) {
        return alert("최소 구매 수량은 1개입니다");
    }
    else {
        totalCount -= 1;
        totalCount1.textContent = totalCount;
        calculation();
    }
}
)

plusBtn.addEventListener("click", () => {
    totalCount += 1;
    totalCount1.textContent = totalCount;
    calculation();
})

const price = document.getElementById("price-tag");
const discountPrice = parseInt(price.dataset.discount);
price.textContent = `${discountPrice.toLocaleString()}`;

const totalprice_init = document.getElementById("totalPrice");
const initPrice = parseInt(totalprice_init.textContent);
totalprice_init.textContent = `${initPrice.toLocaleString()}`;

function calculation(){
    const totalPrice = discountPrice * totalCount;
    const totalPrice1 = document.getElementById("totalPrice");
    totalPrice1.textContent = `${totalPrice.toLocaleString()}원`;
}
