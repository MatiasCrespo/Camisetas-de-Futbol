let marcador;

function initMap(){
    const centroMapa = {lat: -34.655242, lng: -58.522525};

    const mapa = new google.maps.Map(document.getElementById('map-container'),{
        center: centroMapa,
        zoom: 15,
    });

    marcador = new google.maps.Marker({
        position: centroMapa,
        map: mapa,
        title: 'Mi Marcador'
    })
}

function cargarScript(){
    const script = document.createElement('script');
    script.src='https://maps.googleapis.com/maps/api/js?key=AIzaSyB5zDAjb7K-X1pTJFnEQZ2cs6GrTty9p7c&callback=initMap';
    script.async = true;
    script.defer = true;
    document.head.appendChild(script)
}

cargarScript();