// Dark/Light Mode Toggle
function changeMode() {
    let element = document.body;
    element.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', element.classList.contains('dark-mode'));
    
    // Update button text
    const toggleBtn = document.getElementById('mode-toggle');
    if (element.classList.contains('dark-mode')) {
        toggleBtn.textContent = 'Light Mode';
    } else {
        toggleBtn.textContent = 'Dark Mode';
    }
}

// Check for saved mode preference
if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
    document.getElementById('mode-toggle').textContent = 'Light Mode';
}

// Coupon Popup Functions
function loadCoupon() {
    document.getElementById('coupon').style.display = "block";
    document.body.style.overflow = "hidden";
    
    // Add overlay
    const overlay = document.createElement('div');
    overlay.id = 'overlay';
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = 'rgba(0,0,0,0.7)';
    overlay.style.zIndex = '999';
    overlay.onclick = closeCoupon;
    document.body.appendChild(overlay);
}

const closeCoupon = () => {
    document.getElementById('coupon').style.display = "none";
    document.body.style.overflow = "auto";
    
    // Remove overlay
    const overlay = document.getElementById('overlay');
    if (overlay) {
        overlay.remove();
    }
}

// Geolocation and Weather
let getlocation = () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        console.log("Geolocation not supported");
        document.getElementById('weather-info').style.display = "none";
    }
}

function showPosition(data) {
    let weatherInfo = document.getElementById('weather-info');
    weatherInfo.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Loading weather...';
    
    let lat = data.coords.latitude;
    let lon = data.coords.longitude;
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=fbf712a5a83d7305c3cda4ca8fe7ef29`;
    
    fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error('Weather data not available');
            }
            return response.json();
        })
        .then((data) => {
            const iconCode = data.weather[0].icon;
            const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
            
            weatherInfo.innerHTML = `
                <img src="${iconUrl}" alt="${data.weather[0].description}" style="height: 40px;">
                <span>${data.name}: ${Math.round(data.main.temp)}°C, ${data.weather[0].description}</span>
            `;
        })
        .catch((error) => {
            console.error('Error fetching weather:', error);
            weatherInfo.style.display = "none";
        });
}

function showError(error) {
    console.log("Geolocation error:", error);
    document.getElementById('weather-info').style.display = "none";
}

// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Initialize on load
window.addEventListener('DOMContentLoaded', function() {
    // Load coupon after 3 seconds
    setTimeout(loadCoupon, 3000);
    
    // Get location for weather
    getlocation();
});