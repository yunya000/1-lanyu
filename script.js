let text = document.getElementById('text');
let p7 = document.getElementById('p7');
let p6 = document.getElementById('p6');
let p5 = document.getElementById('p5');
let p4 = document.getElementById('p4');
let p3 = document.getElementById('p3');
let p2 = document.getElementById('p2');
let p1 = document.getElementById('p1');

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    // 調整每個圖片的滾動速度
    text.style.marginTop = value * 0.9 + 'px';  // 文字移動速度較慢
    p2.style.marginTop = value * 0.1 + 'px';  // 這層移動較慢
    p3.style.marginTop = value * 0.4 + 'px';  // 中等速度
    p4.style.marginTop = value * 0.5 + 'px';  // 中等速度
    p5.style.marginTop = value * 0.5 + 'px';  // 快速
    p6.style.marginTop = value * 0.7 + 'px';  // 更快速
    p7.style.marginTop = value * 1 + 'px';    // 最快速
    
});


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

