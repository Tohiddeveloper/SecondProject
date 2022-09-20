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

let getlocation=()=>{
    
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showpostion)
    }
    else{
        console.log("geonot supported")
    }
}
function showpostion(data){
    let locate=document.getElementById('location')
    let wea= document.getElementById('wea')
  
    let lat=data.coords.latitude;
    let lon=data.coords.longitude;
    let url=`https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lon}&mode=json&units=metric&cnt=5&appid=fbf712a5a83d7305c3cda4ca8fe7ef29`
    fetch(url).then((response)=>{return response.json()}).then((data)=>{console.log(data)
    
        locate.innerHTML=`<b>${data.city.name}</b>`
        wea.innerHTML=`<b>${data.list[0].temp.max} °C</b>`
    })
}