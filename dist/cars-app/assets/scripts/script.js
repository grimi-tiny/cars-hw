document.getElementById("main-action").onclick = function () {
    document.getElementById("cars").scrollIntoView({behavior:"smooth"})
}

let buttons = document.getElementsByClassName("car-button");
for ( let i = 0; i < buttons.length; i ++){
    buttons[i].onclick = function (){
        document.getElementById("price").scrollIntoView({behavior:"smooth"});
    }
}
document.getElementById("price-action").onclick = function (){
    if (document.getElementById("name").value === ""){
        alert("укажите имя");
    } else if (document.getElementById("phone").value === ""){
        alert("укажите телефон");
    } else if (document.getElementById("car").value === ""){
        alert("укажите автомобиль");
    } else {
        alert("спасибо за заявку! Мы свяжемся с вами позже");
    }
}
document.addEventListener("DOMContentLoaded", function () {
    let layer = document.querySelector('.price-image');
    document.addEventListener('mousemove', (event) => {
        layer.style.transform = 'translate3d(' + ((event.clientX * 0.4) / 6) + 'px,' + ((event.clientY * 0.4) / 6) + 'px,0px)';
    });

    const elem = document.querySelector(".main");
    document.addEventListener('scroll', () => {
        elem.style.backgroundPositionX = '0' + (1.5 * window.pageYOffset) + 'px';
    })
});

const INCREASE_NUMBER_ANIMATION_SPEED = 25;
function increaseNumberAnimationStep(i, element, endNumber) {
    if (i <= endNumber) {
        if (i === endNumber) {
            element.innerText = i + '+';
        } else {
            element.innerText = i;
        }
        i+=5;

        setTimeout(function() {
            increaseNumberAnimationStep(i, element, endNumber)
        }, INCREASE_NUMBER_ANIMATION_SPEED );
    }}
function initIncreaseNumberAnimation() {
    let element = document.querySelector(`.features__clients-count`);
    increaseNumberAnimationStep( 0, element, 4800.)

}
initIncreaseNumberAnimation();