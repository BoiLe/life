let BtnTop = document.getElementById('back-top__icon');
// Sự kiện click 
BtnTop.addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
});
// let scrollPos = 0;
// scrollPos = (document.body.getBoundingClientRect()).top;
// Bắt sự kiện khi sroll
window.addEventListener('scroll', function () {
    if ((document.body.getBoundingClientRect()).top < 0) {
        document.getElementById('back-top').classList.add('active');
    } else {
        document.getElementById('back-top').classList.remove('active');
    }
});
