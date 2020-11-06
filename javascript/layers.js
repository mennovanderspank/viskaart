function initLayers(){
/*
Functie om alle lagen aan de kaart aan te maken
*/


    //Achtergrondlaag met ESRI satelliet
    var ESRIsatteliet = new ol.layer.Tile({
        source: new ol.source.XYZ({
            url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
            attributions: ['Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community']
            }),
        title:'<img class="layerswitcherpng" width="23%" src="satteliet.png">',
        type: 'basemap'
        });
    map.addLayer(ESRIsatteliet);
    ESRIsatteliet.setVisible(false);



    // Openstreetmap achtergrond
    var OSMlayer = new ol.layer.Tile({
        source: new ol.source.OSM(),
        title: '<img class="layerswitcherpng" width="23%" src="osm.png">',
        type: 'basemap'
    });
    map.addLayer(OSMlayer);
    OSMlayer.setVisible(false);

    
    // google maps
    var googlemaps = new ol.layer.Tile({
        source: new ol.source.TileImage({
            url: 'http://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
        }),
            type: 'basemap',
            title: '<img class="layerswitcherpng" width="23%" src="googlemaps.png">'
    });
    map.addLayer(googlemaps);
    googlemaps.setVisible(false);



   // Donker grijze achetrgrondkaart van ESRI
    var darkthumbnail = '<img class="layerswitcherpng" width="23%" src="darkgray.png"></img>'

    var Esri_WorldDarkGrayCanvas = new ol.layer.Tile({
        source: new ol.source.XYZ({
        url: 'https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}',
        attributions: ['& Esri']
        }),
        title: darkthumbnail,
        type: 'basemap'
    });
    map.addLayer(Esri_WorldDarkGrayCanvas);



    //watervlak
    var water = new ol.layer.Tile({
        source: new ol.source.TileWMS(({
            url: "https://geodata.nationaalgeoregister.nl/top10nlv2/ows?SERVICE%3DWMS%26",
            attributions: ' ',
            params: {
                "LAYERS": "waterdeelvlak",
                "TILED": "true",
                "VERSION": "1.3.0"},
        })),
        title: "Water",
        type: 'overlay',
        opacity: 1.000000, 
    });
    water.setVisible(false);
    map.addLayer(water);



    // // visvangstenwms
    //     var visvangstenwms = new ol.source.ImageWMS({
    //         url: 'http://localhost:8080/geoserver/visvangsten/wms?service=WMS&version=1.1.0&request=GetMap&layers=visvangsten%3Avisvangsten&bbox=5.03238296508789%2C51.4006233215332%2C5.70408964157104%2C51.7688217163086&width=768&height=420&srs=EPSG%3A4326',
    //     });
        
    //     var visvangstenwms = new ol.layer.Image({
    //         source: visvangstenwms,
    //         title: 'visvangsten',
    //         type: 'overlay'
    //     });
    // visvangstenwms.setVisible(false);
    // map.addLayer(visvangstenwms);


    
    // // ajax call om alle visvsangsten in wfs op te halen uit geoserver
    // var postData = {
    //     'url': 'http://localhost:8080/geoserver/visvangsten/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=visvangsten%3Avisvangsten&outputFormat=application%2Fjson'
    // }

    // $.ajax({
    //     url: 'php/geoproxycurl.php', 
    //     dataType: 'json',
    //     data: postData,
    //     method: 'post'
    // }).done(function(data) {
    //     bronvisvangstenwfs.addFeatures(new ol.format.GeoJSON().readFeatures(data, {
    //         dataProjection: 'EPSG:4326',
    //         featureProjection: 'EPSG:3857'
    //     }));
    // });

    // // visvangstenwfs
    // var bronvisvangstenwfs = new ol.source.Vector();
    // var visvangstenwfs = new ol.layer.Heatmap({
    //     source: bronvisvangstenwfs,
    //     title: 'Visvangsten',
    //     type: 'overlay',
    //     opacity: 0.9,
    //     blur: 15,
    //     radius: 5,
    // });
    // map.addLayer(visvangstenwfs);

    //Blankvoorn vangsten met behulp van sql view params
    var blankvoorndata = {
        'url': 'http://localhost:8080/geoserver/visvangsten/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=visvangsten%3Avisvangsten_by_vissoort&outputFormat=application%2Fjson&viewparams=vissoort:Blankvoorn'
    }

    $.ajax({
        url: 'php/geoproxycurl.php', 
        dataType: 'json',
        data: blankvoorndata,
        method: 'post'
    }).done(function(data) {
        blankvoornwfs.addFeatures(new ol.format.GeoJSON().readFeatures(data, {
            dataProjection: 'EPSG:4326',
            featureProjection: 'EPSG:3857'
        }));
    });

    // Blankvoornlaag
    var blankvoornwfs = new ol.source.Vector();
    var blankvoorn = new ol.layer.Heatmap({
        source: blankvoornwfs,
        title: 'Blankvoorn',
        type: 'overlay',
        opacity: 0.9,
        blur: 15,
        radius: 5,
    });
    map.addLayer(blankvoorn);



    //Karper vangsten met behulp van sql view params
    var karperdata = {
        'url': 'http://localhost:8080/geoserver/visvangsten/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=visvangsten%3Avisvangsten_by_vissoort&outputFormat=application%2Fjson&viewparams=vissoort:Karper'
    }

    $.ajax({
        url: 'php/geoproxycurl.php', 
        dataType: 'json',
        data: karperdata,
        method: 'post'
    }).done(function(data) {
        karperwfs.addFeatures(new ol.format.GeoJSON().readFeatures(data, {
            dataProjection: 'EPSG:4326',
            featureProjection: 'EPSG:3857'
        }));
    });

    // Karperlaag
    var karperwfs = new ol.source.Vector();
    var karper = new ol.layer.Heatmap({
        source: karperwfs,
        title: 'Karper',
        type: 'overlay',
        opacity: 0.9,
        blur: 15,
        radius: 5,
    });
    map.addLayer(karper);


    //     //heatmap uit eigen bibliotheek
    //     var heatmap = new ol.layer.Heatmap({
    //         title: 'heatmap',
    //         type: 'overlay',
    //         source: new ol.source.Vector({
    //             projection: 'EPSG:4326',
    //             url: 'kml/visvangsten.kml',
    //             format: new ol.format.KML({
    //                 extractStyles: false
    //           }),
    //         }),
    //         opacity: 0.8,
    //         blur: 15,
    //         radius: 5,
    //         // weight: function (feature) {
    //         //   // 2012_Earthquakes_Mag5.kml stores the magnitude of each earthquake in a
    //         //   // standards-violating <magnitude> tag in each Placemark.  We extract it from
    //         //   // the Placemark's name instead.
    //         //   var name = feature.get('name');
    //         //   var magnitude = parseFloat(name.substr(2));
    //         //   return magnitude - 5;
    //         // },
    //       });
    // heatmap.setVisible(false);
    // map.addLayer(heatmap);


}