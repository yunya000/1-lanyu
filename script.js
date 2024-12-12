let text = document.getElementById('text');
let p11 = document.getElementById('p11');
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
    text.style.marginTop = value * 0.3 + 'px';  // 文字移動速度較慢
    p2.style.marginTop = value * 0.1 + 'px';  // 這層移動較慢
    p3.style.marginTop = value * 0.2 + 'px';  // 中等速度
    p4.style.marginTop = value * 0.3 + 'px';  // 中等速度
    p5.style.marginTop = value * 0.5 + 'px';  // 快速
    p6.style.marginTop = value * 0.7 + 'px';  // 更快速
    p7.style.marginTop = value * 1 + 'px';    // 最快速
    p11.style.marginTop = value * 1.2 + 'px'; // 最快速的元素
});
