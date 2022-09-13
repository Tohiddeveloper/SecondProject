function changeMode(){
    let element = document.body;
    element.classList.toggle('dark-mode')
}
function loadCoupon(){
    document.getElementById('coupon').style.display="block";
    document.getElementById('Maincontainer').style.opacity="0.1";
    document.getElementById('brand').style.opacity="0.1";
    document.getElementById('info').style.opacity="0.1";
}

const closeCoupon = () => {
    document.getElementById('coupon').style.display="none";
    document.getElementById('Maincontainer').style.opacity="1";
    document.getElementById('brand').style.opacity="1";
    document.getElementById('info').style.opacity="1";

}