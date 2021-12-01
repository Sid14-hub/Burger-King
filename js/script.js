let bar = document.getElementById('bar');
let options = document.getElementById('options');
let img = document.getElementById('img');
let navigation = document.getElementById('navigation');
let btn3 = document.getElementById('btn3');
let navi = document.getElementById('navi');
let x = window.matchMedia("(max-width: 720px)");

bar.addEventListener('click', () => {
    options.classList.toggle('active');
    navi.classList.toggle('active');
});
img.addEventListener('wheel', () => {
    navigation.style.backgroundColor = 'black';
})
let back = document.getElementById('back');
let extra = document.getElementById('extra');
window.onscroll = function () { showback() };
function showback() {
    if (document.documentElement.scrollTop > 200)
        back.style.display = "block";
    else
        back.style.display = "none";

    if (document.documentElement.scrollTop > 20){
        navi.style.backgroundColor = "black";
        extra.style.backgroundColor = "black"
    }
    else{
        navi.style.backgroundColor = "transparent";
        extra.style.backgroundColor = "transparent";
    }

}
back.addEventListener('click', () => {
    document.documentElement.scrollTop = 0;
})