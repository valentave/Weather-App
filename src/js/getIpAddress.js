export async function getIpAddress() {
    let ipAddress = '';
    await fetch('https://api.ipify.org?format=json')
    .then(response => response.json())
    .then(data => {
      const ipFetch = data.ip;
      ipAddress = ipFetch;
    })
    .catch(error => {
      console.error('Error:', error);
    });

    return ipAddress;
}

export async function getClientCity() {
    const ipAddress = await getIpAddress();
    const url = "http://ip-api.com/json/" + ipAddress;
    let city = '';
    await fetch(url)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        // Aquí puedes acceder a los datos de geolocalización
        const tempCity = data.city;
        const region = data.regionName;
        const country = data.country;
        city = `${tempCity}, ${region}, ${country}`;
    })
    .catch(function(error) {
        city = 'London'
    });
    
    return city;
}