function initMap() {
    map = new ol.Map({
        target: 'map' ,
        layers: [],
        view: new ol.View({
            center: ol.proj.fromLonLat([5.303556, 51.689137]),
            zoom: 14
        })
    });

    // geolocate de gebruiker om te starten waar jij bent
    var geolocation = new ol.Geolocation({
        // take the projection to use from the map's view
        projection: map.getView().getProjection(),
        tracking: true
        });
        
        // listen to changes in position
        geolocation.once('change:position', function(evt) {
            console.log(geolocation.getPosition());

            map.setView(new ol.View({
                center: geolocation.getPosition(),
                zoom: 14
                })
            );
        });

    //pop-up wordt hieronder gemaakt
    var container = document.getElementById('popup');
    var content = document.getElementById('popup-content');
    var closer = document.getElementById('popup-closer');

    var popupnoot = new ol.Overlay({
        element: container,
        autoPan: true,
        autoPanAnimation: {
          duration: 150,
        },
    });
    map.addOverlay(popupnoot);

    
    closer.onclick = function () {
        popupnoot.setPosition(undefined);
        closer.blur();
        return false;
    };

    // laat de poup op het geklikte coordinaat zien
    map.on('click', function (evt) {
        var coordinate = evt.coordinate;
      
        //wat er in de popup staat
        content.innerHTML = '<p>Meest gevangen vis in dit gebied</p><br><strong>Snoek</strong><br><img src=../snoek.png width=100%>';
        popupnoot.setPosition(coordinate);
      });
}