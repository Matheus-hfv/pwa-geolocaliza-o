document.getElementById('get-location').addEventListener('click', () => {
    if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {
            const { latitude, longitude } = position.coords;
            displayLocationInfo(latitude, longitude);
        }, (error) => {
            alert('Erro ao acessar sua localização.');
            console.error(error);
        });
    } else {
        alert('Geolocalização não é suportada pelo seu navegador.');
    }
});

function displayLocationInfo(latitude, longitude) {
    const locationInfo = document.getElementById('location-info');
    locationInfo.textContent = `Sua localização é: Latitude ${latitude}, Longitude ${longitude}.`;

    const welcomeMessage = document.getElementById('welcome-message');
    if (latitude < 0) {
        welcomeMessage.textContent = 'Bem-vindo ao Hemisfério Sul!';
    } else {
        welcomeMessage.textContent = 'Bem-vindo ao Hemisfério Norte!';
    }
}
