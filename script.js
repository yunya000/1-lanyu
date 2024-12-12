let text = document.getElementById('text');
let p11= document.getElementById('p1-1');
let p2  = document.getElementById('p2');
let p3  = document.getElementById('p3');
let p4  = document.getElementById('p4');
let p5  = document.getElementById('p5');
let p6  = document.getElementById('p6');
let p61  = document.getElementById('p6-1');

window.addEventListener('scroll', () => {
    let value = window.scrollY;
    text.style.marginTop = value * 5+ 'px';
    p2.style.marginTop = value * 0.1 + 'px';
    p3.style.marginTop = value * 0.3 + 'px';
    p4.style.marginTop = value * 0.6 + 'px';
    p5.style.marginTop = value * 0.9 + 'px';
    p6.style.marginTop = value * 1+ 'px';
    p11.style.marginTop = value * 1+ 'px';

});

