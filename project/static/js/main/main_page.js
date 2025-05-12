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
