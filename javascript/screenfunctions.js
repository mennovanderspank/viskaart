function buildLayerSwitcher() {
    // ophalen van alle lagen uit de map
    var mapLayers = map.getLayers().getArray();

    // voor elke laag uit de map
    $.each(mapLayers, function(i, layer){
       console.log(layer);
       // als de laag een basemap is
        if(layer.values_.type == 'basemap') {
            // opbouwen Li-item met radiobutton
            let liTekst = '<input type="radio" id="' + layer.ol_uid + '" name="basemaps" value="' + layer.ol_uid + '"';
            
            //zorg dat de zichtbare is aangevinkt
            if (layer.values_.visible) {
                liTekst += "checked>";
            } else {
                liTekst += ">";
            }
            
            //zorg ervoor dat je ook op de tekst kan klikken
            liTekst += '<label for="'+ layer.ol_uid +'">' + layer.values_.title + '</label></li>';
            
            // voeg de li toe aan de ul
            $('#basemaplayers').append(liTekst);
        } else if (layer.values_.type =="overlay") { 
            
            
            //als de laag een overlay is
            // opbouwen li item met een checkbox
            let liTekst = '<li><input type="checkbox" id="' + layer.ol_uid + '" name="' + layer.ol_uid +'" value="'+ layer.ol_uid + '" class="overlayswitch"';
            
            //zorg dat de chekbox van zichtbare aan staat
            if (layer.values_.visible) {
                liTekst += "checked>";
            } else {
                liTekst += ">";
            }

            //zorg ervoor dat je ook op de tekst kan klikken
            liTekst += '<label for="' + layer.ol_uid + '">' + layer.values_.title + '</label></li>';
            // voeg de li toe an de ul
            $('#overlaylayers').append(liTekst);
        }

    });

    // werkende layer switcher
    $('input[type=radio][name=basemaps]').on('change', function(){
        let ol_uid = this.value;

        map.getLayers().forEach(function(layer){
            if (layer.ol_uid == ol_uid) {
                layer.setVisible(true);
            } else if (layer.values_.type == 'basemap'){
                layer.setVisible(false);
            }
        });
    });


    
    $('input[type=checkbox][class=overlayswitch').on('change', function(){
        let ol_uid = this.value;
        map.getLayers().forEach(function(layer){
            if (layer.ol_uid == ol_uid) {
                if (layer.getVisible()) {
                    layer.setVisible(false);
                } else {
                    layer.setVisible(true);
                }
            }
        });
    });
    }

    function closeSidebar() {
        $("aside").animate({width: "40px" }, 200, function() {
            $("#openbutton").show();
            $("#closebutton").hide();
        });
    
        $("#sidebarcontent").hide();
        if ($("body").width() > 600) {
                let contentWidth = $("body").width() - 40;
                $("section").animate({ width: contentWidth }, 200, function() {
                    map.updateSize();
                });
        }
    }

    function openSidebar() {
        if ($("body").width() > 600) {
            let contentWidth = $("body").width() - 400;
            $("section").animate({ width: contentWidth }, 200, function() {
                map.updateSize();
            });
        }

        $("aside").animate({width: "400px" }, 200, function() {
            $("#openbutton").hide();
            $("#closebutton").show();
            $("#sidebarcontent").show();
    });

}