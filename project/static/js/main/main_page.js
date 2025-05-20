/* main page - JS */
// main.js

document.addEventListener('DOMContentLoaded', function () {
    const tabs = document.querySelectorAll('.selection');

    console.log("✅ JS 로드됨, selection 개수:", tabs.length);

    tabs.forEach(tab => {
        tab.addEventListener('click', function (e) {
            e.preventDefault(); // 새로고침 방지
            console.log("클릭됨:", this.textContent); // 콘솔 확인용

            tabs.forEach(t => t.classList.remove('selected'));
            this.classList.add('selected');
        });
    });
});


const cateBar = document.getElementById("cateBar");
const checkboxes = document.querySelectorAll(".checkbox");


cateBar.style.display = "none";

checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", function () {
        const parent = checkbox.closest(".cate-select");
        const cateText = parent.querySelector(".cateText")
        const text = cateText.textContent.trim();

        // 체크되었을 때만 추가
        if (checkbox.checked) {
            const cateHead = document.createElement("div");
            cateHead.className = "cate-head-item";

            const textElement = document.createElement("p");
            textElement.className = "cate-head-text";
            textElement.textContent = text;

            const deleteBtn = document.createElement("img");
            deleteBtn.src = "/static/assets/icons/close.svg";
            deleteBtn.style.width = "14px";
            deleteBtn.style.cursor = "pointer";

            deleteBtn.addEventListener("click", () => {
                cateHead.remove();
                checkbox.checked = false;

                const remaining = cateBar.querySelectorAll(".cate-head-item").length;
                if (remaining === 0) {
                    cateBar.style.display = "none";
                }
            });

            cateHead.appendChild(textElement);
            cateHead.appendChild(deleteBtn);
            cateBar.appendChild(cateHead);
            cateBar.style.display = "flex";
            updateTotalCount();
            console.log("추가됨:", text);

        } else {
            // 체크 해제 시 해당 텍스트 제거
            const items = cateBar.querySelectorAll(".cate-head-item");
            items.forEach((item) => {
                if (item.textContent.trim() === text) {
                    item.remove();
                    console.log("제거됨:", text);
                }
            });

            if (cateBar.querySelectorAll(".cate-head-item").length === 0) {
                cateBar.style.display = "none"; //
            }
            updateTotalCount();
        }
    });
});

const reset = document.querySelector(".reset");
reset.addEventListener("click", () => {
    checkboxes.forEach(cb => (cb.checked = false));
    cateBar.innerHTML = "";
    cateBar.style.display = "none";
    updateTotalCount();
});


// 총합수

function updateTotalCount() {
    const checkedBoxes = document.querySelectorAll(".cate-select .checkbox:checked");
    let total = 0;
    checkedBoxes.forEach(checkbox => {
        const parent = checkbox.closest(".cate-select");
        const countText = parent.querySelector(".count").textContent;
        const count = parseInt(countText);
        total += count;
    });

    const totalTextEl = document.getElementById("totalCount");
    totalTextEl.textContent = `총 ${total || 0}건`;
}
