/* ---------------- 小視窗----------------  */
document.addEventListener('DOMContentLoaded', () => {
    const aboutLink = document.getElementById('about-link'); // 「關於蘭嶼」的鏈接
    const tooltip = document.getElementById('tooltip'); // 小視窗元素

    // 滑鼠移到「關於蘭嶼」時顯示小視窗
    aboutLink.addEventListener('mouseenter', (e) => {
        const rect = aboutLink.getBoundingClientRect(); // 獲取鏈接的位置信息
        tooltip.style.display = 'block'; // 顯示小視窗
        tooltip.style.top = `${rect.bottom + window.scrollY}px`; // 動態設置垂直位置
        tooltip.style.left = `${rect.left + window.scrollX}px`; // 動態設置水平位置
    });

    // 滑鼠移出「關於蘭嶼」時隱藏小視窗
    aboutLink.addEventListener('mouseleave', () => {
        tooltip.style.display = 'none';
    });

    // 防止滑鼠移入小視窗內時被隱藏
    tooltip.addEventListener('mouseenter', () => {
        tooltip.style.display = 'block';
    });

    // 當滑鼠移出小視窗時隱藏
    tooltip.addEventListener('mouseleave', () => {
        tooltip.style.display = 'none';
    });
});


/* ---------------- 滾動視差----------------  */
gsap.utils.toArray('section').forEach((section, index) => {
    const wrapper = section.querySelector('.wrapper');
    if (!wrapper) return;

    // 根據索引設置偏移量，讓動畫從偏中間到中間
    let xStart, xEnd;
    if (index % 2 === 1) {
        // 奇數索引（向左偏移）
        xStart = '-30%'; // 偏中間的位置
        xEnd = '0%';     // 中間
    } else {
        // 偶數索引（向右偏移）
        xStart = '30%';  // 偏中間的位置
        xEnd = '0%';     // 中間
    }

    // 進行動畫
    gsap.fromTo(
        wrapper,
        { x: xStart }, // 起始位置
        {
            x: xEnd, // 結束位置
            scrollTrigger: {
                trigger: section,   // 啟用動畫的元素
                scrub: 2,           // 滾動過程中的平滑效果
                start: 'top center',// 動畫啟動點（section頂部到視口中間）
                end: 'center center',// 動畫結束點（section中間到視口中間）
            },
        }
    );
});





/* ---------------- 回頂部按鈕----------------  */
// 獲取按鈕元素
const backToTopButton = document.getElementById('back-to-top');

// 監聽滾動事件，當頁面滾動到一定距離時顯示按鈕
window.addEventListener('scroll', () => {
    if (window.scrollY > 200) { // 超過 200px 時顯示按鈕
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

// 監聽按鈕點擊事件，平滑滾動到頁面頂部
backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' 
    });
});






