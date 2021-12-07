var wms_layers = [];

var lyr_MapasrasterdelIGN_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://www.ign.es/wms-inspire/mapa-raster",
    attributions: ' ',
                              params: {
                                "LAYERS": "mtn_rasterizado",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Mapas raster del IGN",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_MapasrasterdelIGN_0, 0]);
var format_LAMINAS_probabilidad_media_100aos_1 = new ol.format.GeoJSON();
var features_LAMINAS_probabilidad_media_100aos_1 = format_LAMINAS_probabilidad_media_100aos_1.readFeatures(json_LAMINAS_probabilidad_media_100aos_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LAMINAS_probabilidad_media_100aos_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LAMINAS_probabilidad_media_100aos_1.addFeatures(features_LAMINAS_probabilidad_media_100aos_1);
var lyr_LAMINAS_probabilidad_media_100aos_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LAMINAS_probabilidad_media_100aos_1, 
                style: style_LAMINAS_probabilidad_media_100aos_1,
                interactive: false,
                title: '<img src="styles/legend/LAMINAS_probabilidad_media_100aos_1.png" /> LAMINAS_probabilidad_media_100años'
            });

lyr_MapasrasterdelIGN_0.setVisible(true);lyr_LAMINAS_probabilidad_media_100aos_1.setVisible(true);
var layersList = [lyr_MapasrasterdelIGN_0,lyr_LAMINAS_probabilidad_media_100aos_1];
lyr_LAMINAS_probabilidad_media_100aos_1.set('fieldAliases', {'ID_ZONA': 'ID_ZONA', 'ZONA': 'ZONA', 'TIPO_ZONA': 'TIPO_ZONA', 'LONG_KM': 'LONG_KM', 'AREA_KM2': 'AREA_KM2', 'HIPOTESIS': 'HIPOTESIS', 'METODO_CAL': 'METODO_CAL', 'NUM_PERFIL': 'NUM_PERFIL', 'COTA_MAX': 'COTA_MAX', 'COTA_MEDIA': 'COTA_MEDIA', 'DIST_MAX': 'DIST_MAX', 'PRECISION': 'PRECISION', 'ESTUDIO': 'ESTUDIO', 'TIPO_EST': 'TIPO_EST', 'ESCALA_REP': 'ESCALA_REP', 'DOCUMENTO': 'DOCUMENTO', 'FECHA': 'FECHA', 'ORGANISMO': 'ORGANISMO', 'CLAVE_EXPE': 'CLAVE_EXPE', 'DEMARCACIO': 'DEMARCACIO', 'ID_DEMAR': 'ID_DEMAR', 'ZI_DIRECTI': 'ZI_DIRECTI', });
lyr_LAMINAS_probabilidad_media_100aos_1.set('fieldImages', {'ID_ZONA': 'TextEdit', 'ZONA': 'TextEdit', 'TIPO_ZONA': 'TextEdit', 'LONG_KM': 'TextEdit', 'AREA_KM2': 'TextEdit', 'HIPOTESIS': 'TextEdit', 'METODO_CAL': 'TextEdit', 'NUM_PERFIL': 'TextEdit', 'COTA_MAX': 'TextEdit', 'COTA_MEDIA': 'TextEdit', 'DIST_MAX': 'Range', 'PRECISION': 'TextEdit', 'ESTUDIO': 'TextEdit', 'TIPO_EST': 'TextEdit', 'ESCALA_REP': 'TextEdit', 'DOCUMENTO': 'TextEdit', 'FECHA': 'DateTime', 'ORGANISMO': 'TextEdit', 'CLAVE_EXPE': 'TextEdit', 'DEMARCACIO': 'TextEdit', 'ID_DEMAR': 'TextEdit', 'ZI_DIRECTI': 'TextEdit', });
lyr_LAMINAS_probabilidad_media_100aos_1.set('fieldLabels', {'ID_ZONA': 'no label', 'ZONA': 'no label', 'TIPO_ZONA': 'no label', 'LONG_KM': 'no label', 'AREA_KM2': 'no label', 'HIPOTESIS': 'no label', 'METODO_CAL': 'no label', 'NUM_PERFIL': 'no label', 'COTA_MAX': 'no label', 'COTA_MEDIA': 'no label', 'DIST_MAX': 'no label', 'PRECISION': 'no label', 'ESTUDIO': 'no label', 'TIPO_EST': 'no label', 'ESCALA_REP': 'no label', 'DOCUMENTO': 'no label', 'FECHA': 'no label', 'ORGANISMO': 'no label', 'CLAVE_EXPE': 'no label', 'DEMARCACIO': 'no label', 'ID_DEMAR': 'no label', 'ZI_DIRECTI': 'no label', });
lyr_LAMINAS_probabilidad_media_100aos_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});