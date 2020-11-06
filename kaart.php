<!DOCTYPE html>
<html>
    <head>

        <title>Zoek de beste visstek</title>
        <meta charset="utf-8" />
        <!--Koppeling naar de CSS van OpenLayers-->

        <link href="vendor/ol/ol.css" rel="stylesheet" />

        <!--Koppeling naar eigen css-->
        <link href="css/noot.css" rel="stylesheet" />

    </head>

    <body>

        <main>

            <section>
                <div id="map"></div>

                <div id="popup" class="ol-popup">
                    <a href="#" id="popup-closer" class="ol-popup-closer"></a>
                    <div id="popup-content"></div>
                </div>

            </section>

            <aside>
            

                    <div id="openclosebuttons" class="pointer">
                        <div id="openbutton" onclick="openSidebar()">
                            &rsaquo;
                        </div>
                        <div id="closebutton" onclick="closeSidebar()">
                            &lsaquo;
                        </div>
                    </div>
                    

                <div id="sidebarcontent">
                    <h2>FILTERS</h2>
                        <h3>Achtergrondlagen</h3>
                        <form id="basemaplayers" class="ms-nobullet"></form>

                        <h3 class="noottitel">Visvangsten (niet werkend)</h3>
                            <div>
                                <table>
                                    <tr>
                                        <th>Witvis / Karpervis</th>
                                        <th>Roofvis</th>
                                    </tr>
                                    <tr>
                                        <td><label><input type="checkbox" name="colorCheckbox" value="Blankvoorn"> Blankvoorn</label></td>
                                        <td><label><input type="checkbox" name="colorCheckbox" value="Baars"> Baars</label></td>
                                        
                                    </tr>
                                    <tr>
                                        <td><label><input type="checkbox" name="colorCheckbox" value="Barbeel"> Barbeel</label></td>
                                        <td><label><input type="checkbox" name="colorCheckbox" value="Brasem"> Brasem</label></td>
                                    </tr>
                                    <tr>
                                        <td><label><input type="checkbox" name="colorCheckbox" value="Karper"> Karper</label></td>
                                        <td><label><input type="checkbox" name="colorCheckbox" value="Roofblei"> Roofblei</label></td>
                                    </tr>
                                    <tr>
                                        <td><label><input type="checkbox" name="colorCheckbox" value="Meerval"> Meerval</label></td>
                                        <td><label><input type="checkbox" name="colorCheckbox" value="Blankvoorn"> Snoek</label></td>
                                    </tr>
                                    <tr>
                                        <td><label><input type="checkbox" name="colorCheckbox" value="Spiegelkarper"> Spiegelkarper</label></td>
                                        <td><label><input type="checkbox" name="colorCheckbox" value="Snoekbaars"> Snoekbaars</label></td>
                                    </tr>
                                    <tr>
                                        <td><label><input type="checkbox" name="colorCheckbox" value="Winde"> Winde</label></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td><label><input type="checkbox" name="colorCheckbox" value="Zeelt"> Zeelt</label></td>
                                        <td></td>
                                    </tr>
                                </table>
                            </div>



                        <h3 class="noottitel">Visvangsten (werkend)</h3>
                        <form id="overlaylayers" class="ms-nobullet"></form>

                        <h3 class="noottitel">Tijdsperiode</h3>

                            <div class='options'>
                                <p>
                                Visvangsten tussen:
                                <br/>
                                <span class='dateStart'></span> en <span class='dateEnd'></span>.
                                </p>
                                Tussenpoos: <select onchange="tline.setInterval($(this).val());">
                                <option value=''>Altijd</option>
                                <option value='30d'>1 maand</option>
                                <option value='60d'>2 maanden</option>
                                <option value='90d' selected='selected'>3 maanden</option>
                                <option value='.5y'>6 maanden</option>
                                <option value='1y'>1 jaar</option>
                                </select>
                                <div id="select"></div>
                            </div>

                </div>
            </aside>

        </main>


<!-- inklapbaar menu aan de zijkant-->
<script>
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}
</script>
        <!-- script voor heatmap-->
        <script src="https://unpkg.com/elm-pep"></script>

        <!-- script voor timeslider-->
        <script src="https://cdn.polyfill.io/v2/polyfill.min.js?features=requestAnimationFrame,Element.prototype.classList,URL,Object.assign"></script>

        <!--Koppeling naar jQuery JavaScript-->
        <script src="vendor/jquery/jquery-3.5.1.js"></script>

        <!--Koppeling naar Javascript van OpenLayers-->
        <script src="vendor/ol/ol.js"></script>

        <!--Koppeling naar eigen JavaScript code-->
        <script src="javascript/global.js"></script>
        <script src="data/data.js"></script>
        <script src="javascript/map.js"></script>
        <script src="javascript/layers.js"></script>
        <script src="javascript/screenfunctions.js"></script>
        <script src="javascript/main.js"></script>


    </body>

</html>