var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_SUNGAI_1 = new ol.format.GeoJSON();
var features_SUNGAI_1 = format_SUNGAI_1.readFeatures(json_SUNGAI_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUNGAI_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUNGAI_1.addFeatures(features_SUNGAI_1);
var lyr_SUNGAI_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SUNGAI_1, 
                style: style_SUNGAI_1,
                popuplayertitle: 'SUNGAI',
                interactive: false,
                title: '<img src="styles/legend/SUNGAI_1.png" /> SUNGAI'
            });
var format_JALAN_2 = new ol.format.GeoJSON();
var features_JALAN_2 = format_JALAN_2.readFeatures(json_JALAN_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JALAN_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JALAN_2.addFeatures(features_JALAN_2);
var lyr_JALAN_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JALAN_2, 
                style: style_JALAN_2,
                popuplayertitle: 'JALAN',
                interactive: false,
                title: '<img src="styles/legend/JALAN_2.png" /> JALAN'
            });
var format_AREA_FUNGSIONAL_3 = new ol.format.GeoJSON();
var features_AREA_FUNGSIONAL_3 = format_AREA_FUNGSIONAL_3.readFeatures(json_AREA_FUNGSIONAL_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AREA_FUNGSIONAL_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AREA_FUNGSIONAL_3.addFeatures(features_AREA_FUNGSIONAL_3);
var lyr_AREA_FUNGSIONAL_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AREA_FUNGSIONAL_3, 
                style: style_AREA_FUNGSIONAL_3,
                popuplayertitle: 'AREA_FUNGSIONAL',
                interactive: true,
                title: '<img src="styles/legend/AREA_FUNGSIONAL_3.png" /> AREA_FUNGSIONAL'
            });
var format_KETERANGANKERUSAKANSALURAN_4 = new ol.format.GeoJSON();
var features_KETERANGANKERUSAKANSALURAN_4 = format_KETERANGANKERUSAKANSALURAN_4.readFeatures(json_KETERANGANKERUSAKANSALURAN_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KETERANGANKERUSAKANSALURAN_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KETERANGANKERUSAKANSALURAN_4.addFeatures(features_KETERANGANKERUSAKANSALURAN_4);
var lyr_KETERANGANKERUSAKANSALURAN_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KETERANGANKERUSAKANSALURAN_4, 
                style: style_KETERANGANKERUSAKANSALURAN_4,
                popuplayertitle: 'KETERANGAN KERUSAKAN SALURAN',
                interactive: true,
    title: 'KETERANGAN KERUSAKAN SALURAN<br />\
    <img src="styles/legend/KETERANGANKERUSAKANSALURAN_4_0.png" /> Baik<br />\
    <img src="styles/legend/KETERANGANKERUSAKANSALURAN_4_1.png" /> Rusak Ringan<br />\
    <img src="styles/legend/KETERANGANKERUSAKANSALURAN_4_2.png" /> Rusak Sedang<br />\
    <img src="styles/legend/KETERANGANKERUSAKANSALURAN_4_3.png" /> Rusak Berat<br />' });
var format_JENISSALURAN_5 = new ol.format.GeoJSON();
var features_JENISSALURAN_5 = format_JENISSALURAN_5.readFeatures(json_JENISSALURAN_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JENISSALURAN_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JENISSALURAN_5.addFeatures(features_JENISSALURAN_5);
var lyr_JENISSALURAN_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JENISSALURAN_5, 
                style: style_JENISSALURAN_5,
                popuplayertitle: 'JENIS SALURAN',
                interactive: true,
    title: 'JENIS SALURAN<br />\
    <img src="styles/legend/JENISSALURAN_5_0.png" /> Saluran Primer<br />\
    <img src="styles/legend/JENISSALURAN_5_1.png" /> Saluran Sekunder<br />' });
var format_Tikungan_6 = new ol.format.GeoJSON();
var features_Tikungan_6 = format_Tikungan_6.readFeatures(json_Tikungan_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tikungan_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tikungan_6.addFeatures(features_Tikungan_6);
var lyr_Tikungan_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tikungan_6, 
                style: style_Tikungan_6,
                popuplayertitle: 'Tikungan',
                interactive: true,
                title: '<img src="styles/legend/Tikungan_6.png" /> Tikungan'
            });
var format_Beda_pasangan_7 = new ol.format.GeoJSON();
var features_Beda_pasangan_7 = format_Beda_pasangan_7.readFeatures(json_Beda_pasangan_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Beda_pasangan_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Beda_pasangan_7.addFeatures(features_Beda_pasangan_7);
var lyr_Beda_pasangan_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Beda_pasangan_7, 
                style: style_Beda_pasangan_7,
                popuplayertitle: 'Beda_pasangan',
                interactive: true,
                title: '<img src="styles/legend/Beda_pasangan_7.png" /> Beda_pasangan'
            });
var format_Gorong__Gorong_8 = new ol.format.GeoJSON();
var features_Gorong__Gorong_8 = format_Gorong__Gorong_8.readFeatures(json_Gorong__Gorong_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Gorong__Gorong_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Gorong__Gorong_8.addFeatures(features_Gorong__Gorong_8);
var lyr_Gorong__Gorong_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Gorong__Gorong_8, 
                style: style_Gorong__Gorong_8,
                popuplayertitle: 'Gorong_-_Gorong',
                interactive: true,
                title: '<img src="styles/legend/Gorong__Gorong_8.png" /> Gorong_-_Gorong'
            });
var format_Titik_Per_50_9 = new ol.format.GeoJSON();
var features_Titik_Per_50_9 = format_Titik_Per_50_9.readFeatures(json_Titik_Per_50_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Titik_Per_50_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Titik_Per_50_9.addFeatures(features_Titik_Per_50_9);
var lyr_Titik_Per_50_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Titik_Per_50_9, 
                style: style_Titik_Per_50_9,
                popuplayertitle: 'Titik_Per_50',
                interactive: true,
                title: '<img src="styles/legend/Titik_Per_50_9.png" /> Titik_Per_50'
            });
var format_BoxAlvaValev_10 = new ol.format.GeoJSON();
var features_BoxAlvaValev_10 = format_BoxAlvaValev_10.readFeatures(json_BoxAlvaValev_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BoxAlvaValev_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BoxAlvaValev_10.addFeatures(features_BoxAlvaValev_10);
var lyr_BoxAlvaValev_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BoxAlvaValev_10, 
                style: style_BoxAlvaValev_10,
                popuplayertitle: 'Box Alva Valev',
                interactive: true,
                title: '<img src="styles/legend/BoxAlvaValev_10.png" /> Box Alva Valev'
            });
var format_Bangunan_Air_11 = new ol.format.GeoJSON();
var features_Bangunan_Air_11 = format_Bangunan_Air_11.readFeatures(json_Bangunan_Air_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bangunan_Air_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bangunan_Air_11.addFeatures(features_Bangunan_Air_11);
var lyr_Bangunan_Air_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bangunan_Air_11, 
                style: style_Bangunan_Air_11,
                popuplayertitle: 'Bangunan_Air',
                interactive: true,
                title: '<img src="styles/legend/Bangunan_Air_11.png" /> Bangunan_Air'
            });
var format_Bangunan_Bagi_12 = new ol.format.GeoJSON();
var features_Bangunan_Bagi_12 = format_Bangunan_Bagi_12.readFeatures(json_Bangunan_Bagi_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bangunan_Bagi_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bangunan_Bagi_12.addFeatures(features_Bangunan_Bagi_12);
var lyr_Bangunan_Bagi_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bangunan_Bagi_12, 
                style: style_Bangunan_Bagi_12,
                popuplayertitle: 'Bangunan_Bagi',
                interactive: true,
                title: '<img src="styles/legend/Bangunan_Bagi_12.png" /> Bangunan_Bagi'
            });
var format_Bangunan_Sadap_13 = new ol.format.GeoJSON();
var features_Bangunan_Sadap_13 = format_Bangunan_Sadap_13.readFeatures(json_Bangunan_Sadap_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bangunan_Sadap_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bangunan_Sadap_13.addFeatures(features_Bangunan_Sadap_13);
var lyr_Bangunan_Sadap_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bangunan_Sadap_13, 
                style: style_Bangunan_Sadap_13,
                popuplayertitle: 'Bangunan_Sadap',
                interactive: true,
                title: '<img src="styles/legend/Bangunan_Sadap_13.png" /> Bangunan_Sadap'
            });
var format_Sumur_Pompa_14 = new ol.format.GeoJSON();
var features_Sumur_Pompa_14 = format_Sumur_Pompa_14.readFeatures(json_Sumur_Pompa_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sumur_Pompa_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sumur_Pompa_14.addFeatures(features_Sumur_Pompa_14);
var lyr_Sumur_Pompa_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sumur_Pompa_14, 
                style: style_Sumur_Pompa_14,
                popuplayertitle: 'Sumur_Pompa',
                interactive: true,
                title: '<img src="styles/legend/Sumur_Pompa_14.png" /> Sumur_Pompa'
            });
var group_TITIKAKSESORIS = new ol.layer.Group({
                                layers: [lyr_BoxAlvaValev_10,lyr_Bangunan_Air_11,lyr_Bangunan_Bagi_12,lyr_Bangunan_Sadap_13,lyr_Sumur_Pompa_14,],
                                fold: 'open',
                                title: 'TITIK AKSESORIS'});
var group_TITIKKETERANGAN = new ol.layer.Group({
                                layers: [lyr_Tikungan_6,lyr_Beda_pasangan_7,lyr_Gorong__Gorong_8,lyr_Titik_Per_50_9,],
                                fold: 'open',
                                title: 'TITIK KETERANGAN'});

lyr_GoogleSatellite_0.setVisible(true);lyr_SUNGAI_1.setVisible(true);lyr_JALAN_2.setVisible(true);lyr_AREA_FUNGSIONAL_3.setVisible(true);lyr_KETERANGANKERUSAKANSALURAN_4.setVisible(true);lyr_JENISSALURAN_5.setVisible(true);lyr_Tikungan_6.setVisible(true);lyr_Beda_pasangan_7.setVisible(true);lyr_Gorong__Gorong_8.setVisible(true);lyr_Titik_Per_50_9.setVisible(true);lyr_BoxAlvaValev_10.setVisible(true);lyr_Bangunan_Air_11.setVisible(true);lyr_Bangunan_Bagi_12.setVisible(true);lyr_Bangunan_Sadap_13.setVisible(true);lyr_Sumur_Pompa_14.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_SUNGAI_1,lyr_JALAN_2,lyr_AREA_FUNGSIONAL_3,lyr_KETERANGANKERUSAKANSALURAN_4,lyr_JENISSALURAN_5,group_TITIKKETERANGAN,group_TITIKAKSESORIS];
lyr_SUNGAI_1.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'TIPSNG': 'TIPSNG', 'KLSSNG': 'KLSSNG', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'STATUS': 'STATUS', 'WMAX': 'WMAX', 'DBTMAX': 'DBTMAX', 'SLPRT': 'SLPRT', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_JALAN_2.set('fieldAliases', {'NAMRJL': 'NAMRJL', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_AREA_FUNGSIONAL_3.set('fieldAliases', {'Id': 'Id', 'LUAS': 'LUAS', });
lyr_KETERANGANKERUSAKANSALURAN_4.set('fieldAliases', {'Id': 'Id', 'JENIS': 'JENIS', 'KATEGORI': 'KATEGORI', 'KETERANGAN': 'KETERANGAN', 'PANJANG': 'PANJANG', });
lyr_JENISSALURAN_5.set('fieldAliases', {'Id': 'Id', 'JENIS': 'JENIS', 'KATEGORI': 'KATEGORI', 'KETERANGAN': 'KETERANGAN', 'PANJANG': 'PANJANG', });
lyr_Tikungan_6.set('fieldAliases', {'NAME': 'NAME', 'Descriptio': 'Descriptio', 'pdfmaps_ph': 'pdfmaps_ph', 'Photo_Name': 'Photo_Name', 'X': 'X', 'Y': 'Y', 'BUJUR': 'BUJUR', 'LINTANG': 'LINTANG', 'PANJANG': 'PANJANG', 'FOTO_1': 'FOTO_1', 'FOTO_2': 'FOTO_2', 'FOTO_3': 'FOTO_3', 'FOTO_4': 'FOTO_4', 'FOTO_5': 'FOTO_5', 'FOTO_6': 'FOTO_6', 'FOTO_7': 'FOTO_7', 'FOTO_8': 'FOTO_8', });
lyr_Beda_pasangan_7.set('fieldAliases', {'NAME': 'NAME', 'Descriptio': 'Descriptio', 'pdfmaps_ph': 'pdfmaps_ph', 'Photo_Name': 'Photo_Name', 'X': 'X', 'Y': 'Y', 'BUJUR': 'BUJUR', 'LINTANG': 'LINTANG', 'PANJANG': 'PANJANG', 'FOTO_1': 'FOTO_1', 'FOTO_2': 'FOTO_2', 'FOTO_3': 'FOTO_3', 'FOTO_4': 'FOTO_4', 'FOTO_5': 'FOTO_5', 'FOTO_6': 'FOTO_6', 'FOTO_7': 'FOTO_7', 'FOTO_8': 'FOTO_8', });
lyr_Gorong__Gorong_8.set('fieldAliases', {'NAME': 'NAME', 'Descriptio': 'Descriptio', 'pdfmaps_ph': 'pdfmaps_ph', 'Photo_Name': 'Photo_Name', 'X': 'X', 'Y': 'Y', 'BUJUR': 'BUJUR', 'LINTANG': 'LINTANG', 'PANJANG': 'PANJANG', 'FOTO_1': 'FOTO_1', 'FOTO_2': 'FOTO_2', 'FOTO_3': 'FOTO_3', 'FOTO_4': 'FOTO_4', 'FOTO_5': 'FOTO_5', 'FOTO_6': 'FOTO_6', 'FOTO_7': 'FOTO_7', 'FOTO_8': 'FOTO_8', });
lyr_Titik_Per_50_9.set('fieldAliases', {'NAME': 'NAME', 'Descriptio': 'Descriptio', 'pdfmaps_ph': 'pdfmaps_ph', 'Photo_Name': 'Photo_Name', 'X': 'X', 'Y': 'Y', 'BUJUR': 'BUJUR', 'LINTANG': 'LINTANG', 'PANJANG': 'PANJANG', 'FOTO_1': 'FOTO_1', 'FOTO_2': 'FOTO_2', 'FOTO_3': 'FOTO_3', 'FOTO_4': 'FOTO_4', 'FOTO_5': 'FOTO_5', 'FOTO_6': 'FOTO_6', 'FOTO_7': 'FOTO_7', 'FOTO_8': 'FOTO_8', });
lyr_BoxAlvaValev_10.set('fieldAliases', {'NAME': 'NAME', 'Descriptio': 'Descriptio', 'pdfmaps_ph': 'pdfmaps_ph', 'Photo_Name': 'Photo_Name', 'X': 'X', 'Y': 'Y', 'BUJUR': 'BUJUR', 'LINTANG': 'LINTANG', 'PANJANG': 'PANJANG', 'FOTO_1': 'FOTO_1', 'FOTO_2': 'FOTO_2', 'FOTO_3': 'FOTO_3', 'FOTO_4': 'FOTO_4', 'FOTO_5': 'FOTO_5', 'FOTO_6': 'FOTO_6', 'FOTO_7': 'FOTO_7', 'FOTO_8': 'FOTO_8', });
lyr_Bangunan_Air_11.set('fieldAliases', {'NAME': 'NAME', 'Descriptio': 'Descriptio', 'pdfmaps_ph': 'pdfmaps_ph', 'Photo_Name': 'Photo_Name', 'X': 'X', 'Y': 'Y', 'BUJUR': 'BUJUR', 'LINTANG': 'LINTANG', 'PANJANG': 'PANJANG', 'FOTO_1': 'FOTO_1', 'FOTO_2': 'FOTO_2', 'FOTO_3': 'FOTO_3', 'FOTO_4': 'FOTO_4', 'FOTO_5': 'FOTO_5', 'FOTO_6': 'FOTO_6', 'FOTO_7': 'FOTO_7', 'FOTO_8': 'FOTO_8', });
lyr_Bangunan_Bagi_12.set('fieldAliases', {'NAME': 'NAME', 'Descriptio': 'Descriptio', 'pdfmaps_ph': 'pdfmaps_ph', 'Photo_Name': 'Photo_Name', 'X': 'X', 'Y': 'Y', 'BUJUR': 'BUJUR', 'LINTANG': 'LINTANG', 'PANJANG': 'PANJANG', 'FOTO_1': 'FOTO_1', 'FOTO_2': 'FOTO_2', 'FOTO_3': 'FOTO_3', 'FOTO_4': 'FOTO_4', 'FOTO_5': 'FOTO_5', 'FOTO_6': 'FOTO_6', 'FOTO_7': 'FOTO_7', 'FOTO_8': 'FOTO_8', });
lyr_Bangunan_Sadap_13.set('fieldAliases', {'NAME': 'NAME', 'Descriptio': 'Descriptio', 'pdfmaps_ph': 'pdfmaps_ph', 'Photo_Name': 'Photo_Name', 'X': 'X', 'Y': 'Y', 'BUJUR': 'BUJUR', 'LINTANG': 'LINTANG', 'PANJANG': 'PANJANG', 'FOTO_1': 'FOTO_1', 'FOTO_2': 'FOTO_2', 'FOTO_3': 'FOTO_3', 'FOTO_4': 'FOTO_4', 'FOTO_5': 'FOTO_5', 'FOTO_6': 'FOTO_6', 'FOTO_7': 'FOTO_7', 'FOTO_8': 'FOTO_8', });
lyr_Sumur_Pompa_14.set('fieldAliases', {'NAME': 'NAME', 'Descriptio': 'Descriptio', 'pdfmaps_ph': 'pdfmaps_ph', 'Photo_Name': 'Photo_Name', 'X': 'X', 'Y': 'Y', 'BUJUR': 'BUJUR', 'LINTANG': 'LINTANG', 'PANJANG': 'PANJANG', 'FOTO_1': 'FOTO_1', 'FOTO_2': 'FOTO_2', 'FOTO_3': 'FOTO_3', 'FOTO_4': 'FOTO_4', 'FOTO_5': 'FOTO_5', 'FOTO_6': 'FOTO_6', 'FOTO_7': 'FOTO_7', 'FOTO_8': 'FOTO_8', });
lyr_SUNGAI_1.set('fieldImages', {'NAMOBJ': 'TextEdit', 'TIPSNG': 'TextEdit', 'KLSSNG': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'NAMWS': 'TextEdit', 'NAMDAS': 'TextEdit', 'STATUS': 'TextEdit', 'WMAX': 'TextEdit', 'DBTMAX': 'TextEdit', 'SLPRT': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_JALAN_2.set('fieldImages', {'NAMRJL': 'TextEdit', 'KONRJL': 'TextEdit', 'MATRJL': 'TextEdit', 'FGSRJL': 'TextEdit', 'UTKRJL': 'TextEdit', 'TOLRJL': 'TextEdit', 'WLYRJL': 'TextEdit', 'AUTRJL': 'TextEdit', 'KLSRJL': 'TextEdit', 'SPCRJL': 'TextEdit', 'JPARJL': 'TextEdit', 'ARHRJL': 'TextEdit', 'STARJL': 'TextEdit', 'KLLRJL': 'TextEdit', 'MEDRJL': 'TextEdit', 'LOCRJL': 'TextEdit', 'JARRJL': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_AREA_FUNGSIONAL_3.set('fieldImages', {'Id': 'Range', 'LUAS': 'TextEdit', });
lyr_KETERANGANKERUSAKANSALURAN_4.set('fieldImages', {'Id': 'Range', 'JENIS': 'TextEdit', 'KATEGORI': 'TextEdit', 'KETERANGAN': 'TextEdit', 'PANJANG': 'TextEdit', });
lyr_JENISSALURAN_5.set('fieldImages', {'Id': 'Range', 'JENIS': 'TextEdit', 'KATEGORI': 'TextEdit', 'KETERANGAN': 'TextEdit', 'PANJANG': 'TextEdit', });
lyr_Tikungan_6.set('fieldImages', {'NAME': 'TextEdit', 'Descriptio': 'TextEdit', 'pdfmaps_ph': 'TextEdit', 'Photo_Name': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'BUJUR': 'TextEdit', 'LINTANG': 'TextEdit', 'PANJANG': 'TextEdit', 'FOTO_1': 'ExternalResource', 'FOTO_2': 'ExternalResource', 'FOTO_3': 'ExternalResource', 'FOTO_4': 'ExternalResource', 'FOTO_5': 'ExternalResource', 'FOTO_6': 'TextEdit', 'FOTO_7': 'TextEdit', 'FOTO_8': 'TextEdit', });
lyr_Beda_pasangan_7.set('fieldImages', {'NAME': 'TextEdit', 'Descriptio': 'TextEdit', 'pdfmaps_ph': 'TextEdit', 'Photo_Name': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'BUJUR': 'TextEdit', 'LINTANG': 'TextEdit', 'PANJANG': 'TextEdit', 'FOTO_1': 'TextEdit', 'FOTO_2': 'TextEdit', 'FOTO_3': 'TextEdit', 'FOTO_4': 'TextEdit', 'FOTO_5': 'TextEdit', 'FOTO_6': 'TextEdit', 'FOTO_7': 'TextEdit', 'FOTO_8': 'TextEdit', });
lyr_Gorong__Gorong_8.set('fieldImages', {'NAME': 'TextEdit', 'Descriptio': 'TextEdit', 'pdfmaps_ph': 'TextEdit', 'Photo_Name': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'BUJUR': 'TextEdit', 'LINTANG': 'TextEdit', 'PANJANG': 'TextEdit', 'FOTO_1': 'ExternalResource', 'FOTO_2': 'ExternalResource', 'FOTO_3': 'ExternalResource', 'FOTO_4': 'ExternalResource', 'FOTO_5': 'ExternalResource', 'FOTO_6': 'TextEdit', 'FOTO_7': 'TextEdit', 'FOTO_8': 'TextEdit', });
lyr_Titik_Per_50_9.set('fieldImages', {'NAME': 'TextEdit', 'Descriptio': 'TextEdit', 'pdfmaps_ph': 'TextEdit', 'Photo_Name': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'BUJUR': 'TextEdit', 'LINTANG': 'TextEdit', 'PANJANG': 'TextEdit', 'FOTO_1': 'ExternalResource', 'FOTO_2': 'ExternalResource', 'FOTO_3': 'ExternalResource', 'FOTO_4': 'ExternalResource', 'FOTO_5': 'ExternalResource', 'FOTO_6': 'TextEdit', 'FOTO_7': 'TextEdit', 'FOTO_8': 'TextEdit', });
lyr_BoxAlvaValev_10.set('fieldImages', {'NAME': 'TextEdit', 'Descriptio': 'TextEdit', 'pdfmaps_ph': 'TextEdit', 'Photo_Name': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'BUJUR': 'TextEdit', 'LINTANG': 'TextEdit', 'PANJANG': 'TextEdit', 'FOTO_1': 'ExternalResource', 'FOTO_2': 'ExternalResource', 'FOTO_3': 'ExternalResource', 'FOTO_4': 'ExternalResource', 'FOTO_5': 'ExternalResource', 'FOTO_6': 'TextEdit', 'FOTO_7': 'TextEdit', 'FOTO_8': 'TextEdit', });
lyr_Bangunan_Air_11.set('fieldImages', {'NAME': 'TextEdit', 'Descriptio': 'TextEdit', 'pdfmaps_ph': 'TextEdit', 'Photo_Name': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'BUJUR': 'TextEdit', 'LINTANG': 'TextEdit', 'PANJANG': 'TextEdit', 'FOTO_1': 'ExternalResource', 'FOTO_2': 'ExternalResource', 'FOTO_3': 'ExternalResource', 'FOTO_4': 'ExternalResource', 'FOTO_5': 'ExternalResource', 'FOTO_6': 'TextEdit', 'FOTO_7': 'TextEdit', 'FOTO_8': 'TextEdit', });
lyr_Bangunan_Bagi_12.set('fieldImages', {'NAME': 'TextEdit', 'Descriptio': 'TextEdit', 'pdfmaps_ph': 'TextEdit', 'Photo_Name': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'BUJUR': 'TextEdit', 'LINTANG': 'TextEdit', 'PANJANG': 'TextEdit', 'FOTO_1': 'ExternalResource', 'FOTO_2': 'ExternalResource', 'FOTO_3': 'ExternalResource', 'FOTO_4': 'ExternalResource', 'FOTO_5': 'ExternalResource', 'FOTO_6': 'TextEdit', 'FOTO_7': 'TextEdit', 'FOTO_8': 'TextEdit', });
lyr_Bangunan_Sadap_13.set('fieldImages', {'NAME': 'TextEdit', 'Descriptio': 'TextEdit', 'pdfmaps_ph': 'TextEdit', 'Photo_Name': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'BUJUR': 'TextEdit', 'LINTANG': 'TextEdit', 'PANJANG': 'TextEdit', 'FOTO_1': 'ExternalResource', 'FOTO_2': 'ExternalResource', 'FOTO_3': 'ExternalResource', 'FOTO_4': 'ExternalResource', 'FOTO_5': 'ExternalResource', 'FOTO_6': 'TextEdit', 'FOTO_7': 'TextEdit', 'FOTO_8': 'TextEdit', });
lyr_Sumur_Pompa_14.set('fieldImages', {'NAME': 'TextEdit', 'Descriptio': 'TextEdit', 'pdfmaps_ph': 'TextEdit', 'Photo_Name': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'BUJUR': 'TextEdit', 'LINTANG': 'TextEdit', 'PANJANG': 'TextEdit', 'FOTO_1': 'ExternalResource', 'FOTO_2': 'ExternalResource', 'FOTO_3': 'ExternalResource', 'FOTO_4': 'ExternalResource', 'FOTO_5': 'ExternalResource', 'FOTO_6': 'TextEdit', 'FOTO_7': 'TextEdit', 'FOTO_8': 'TextEdit', });
lyr_SUNGAI_1.set('fieldLabels', {'NAMOBJ': 'no label', 'TIPSNG': 'no label', 'KLSSNG': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'NAMWS': 'no label', 'NAMDAS': 'no label', 'STATUS': 'no label', 'WMAX': 'no label', 'DBTMAX': 'no label', 'SLPRT': 'no label', 'SHAPE_Leng': 'no label', });
lyr_JALAN_2.set('fieldLabels', {'NAMRJL': 'no label', 'KONRJL': 'no label', 'MATRJL': 'no label', 'FGSRJL': 'no label', 'UTKRJL': 'no label', 'TOLRJL': 'no label', 'WLYRJL': 'no label', 'AUTRJL': 'no label', 'KLSRJL': 'no label', 'SPCRJL': 'no label', 'JPARJL': 'no label', 'ARHRJL': 'no label', 'STARJL': 'no label', 'KLLRJL': 'no label', 'MEDRJL': 'no label', 'LOCRJL': 'no label', 'JARRJL': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', });
lyr_AREA_FUNGSIONAL_3.set('fieldLabels', {'Id': 'hidden field', 'LUAS': 'inline label - visible with data', });
lyr_KETERANGANKERUSAKANSALURAN_4.set('fieldLabels', {'Id': 'hidden field', 'JENIS': 'hidden field', 'KATEGORI': 'inline label - visible with data', 'KETERANGAN': 'inline label - visible with data', 'PANJANG': 'inline label - visible with data', });
lyr_JENISSALURAN_5.set('fieldLabels', {'Id': 'hidden field', 'JENIS': 'inline label - visible with data', 'KATEGORI': 'hidden field', 'KETERANGAN': 'hidden field', 'PANJANG': 'inline label - visible with data', });
lyr_Tikungan_6.set('fieldLabels', {'NAME': 'inline label - visible with data', 'Descriptio': 'hidden field', 'pdfmaps_ph': 'hidden field', 'Photo_Name': 'hidden field', 'X': 'inline label - visible with data', 'Y': 'inline label - visible with data', 'BUJUR': 'inline label - visible with data', 'LINTANG': 'inline label - visible with data', 'PANJANG': 'inline label - visible with data', 'FOTO_1': 'no label', 'FOTO_2': 'no label', 'FOTO_3': 'no label', 'FOTO_4': 'no label', 'FOTO_5': 'no label', 'FOTO_6': 'no label', 'FOTO_7': 'no label', 'FOTO_8': 'no label', });
lyr_Beda_pasangan_7.set('fieldLabels', {'NAME': 'inline label - visible with data', 'Descriptio': 'hidden field', 'pdfmaps_ph': 'hidden field', 'Photo_Name': 'hidden field', 'X': 'inline label - visible with data', 'Y': 'inline label - visible with data', 'BUJUR': 'inline label - visible with data', 'LINTANG': 'inline label - visible with data', 'PANJANG': 'inline label - visible with data', 'FOTO_1': 'no label', 'FOTO_2': 'no label', 'FOTO_3': 'no label', 'FOTO_4': 'no label', 'FOTO_5': 'no label', 'FOTO_6': 'no label', 'FOTO_7': 'no label', 'FOTO_8': 'no label', });
lyr_Gorong__Gorong_8.set('fieldLabels', {'NAME': 'inline label - visible with data', 'Descriptio': 'hidden field', 'pdfmaps_ph': 'hidden field', 'Photo_Name': 'hidden field', 'X': 'inline label - visible with data', 'Y': 'inline label - visible with data', 'BUJUR': 'inline label - visible with data', 'LINTANG': 'inline label - visible with data', 'PANJANG': 'inline label - visible with data', 'FOTO_1': 'no label', 'FOTO_2': 'no label', 'FOTO_3': 'no label', 'FOTO_4': 'no label', 'FOTO_5': 'no label', 'FOTO_6': 'no label', 'FOTO_7': 'no label', 'FOTO_8': 'no label', });
lyr_Titik_Per_50_9.set('fieldLabels', {'NAME': 'inline label - visible with data', 'Descriptio': 'hidden field', 'pdfmaps_ph': 'hidden field', 'Photo_Name': 'hidden field', 'X': 'inline label - visible with data', 'Y': 'inline label - visible with data', 'BUJUR': 'inline label - visible with data', 'LINTANG': 'inline label - visible with data', 'PANJANG': 'inline label - visible with data', 'FOTO_1': 'no label', 'FOTO_2': 'no label', 'FOTO_3': 'no label', 'FOTO_4': 'no label', 'FOTO_5': 'no label', 'FOTO_6': 'no label', 'FOTO_7': 'no label', 'FOTO_8': 'no label', });
lyr_BoxAlvaValev_10.set('fieldLabels', {'NAME': 'inline label - visible with data', 'Descriptio': 'hidden field', 'pdfmaps_ph': 'hidden field', 'Photo_Name': 'hidden field', 'X': 'inline label - visible with data', 'Y': 'inline label - visible with data', 'BUJUR': 'inline label - visible with data', 'LINTANG': 'inline label - visible with data', 'PANJANG': 'inline label - visible with data', 'FOTO_1': 'no label', 'FOTO_2': 'no label', 'FOTO_3': 'no label', 'FOTO_4': 'no label', 'FOTO_5': 'no label', 'FOTO_6': 'no label', 'FOTO_7': 'no label', 'FOTO_8': 'no label', });
lyr_Bangunan_Air_11.set('fieldLabels', {'NAME': 'inline label - visible with data', 'Descriptio': 'hidden field', 'pdfmaps_ph': 'hidden field', 'Photo_Name': 'hidden field', 'X': 'inline label - visible with data', 'Y': 'inline label - visible with data', 'BUJUR': 'inline label - visible with data', 'LINTANG': 'inline label - visible with data', 'PANJANG': 'inline label - visible with data', 'FOTO_1': 'no label', 'FOTO_2': 'no label', 'FOTO_3': 'no label', 'FOTO_4': 'no label', 'FOTO_5': 'no label', 'FOTO_6': 'no label', 'FOTO_7': 'no label', 'FOTO_8': 'no label', });
lyr_Bangunan_Bagi_12.set('fieldLabels', {'NAME': 'inline label - visible with data', 'Descriptio': 'hidden field', 'pdfmaps_ph': 'hidden field', 'Photo_Name': 'inline label - visible with data', 'X': 'inline label - visible with data', 'Y': 'inline label - visible with data', 'BUJUR': 'inline label - visible with data', 'LINTANG': 'inline label - visible with data', 'PANJANG': 'inline label - visible with data', 'FOTO_1': 'no label', 'FOTO_2': 'no label', 'FOTO_3': 'no label', 'FOTO_4': 'no label', 'FOTO_5': 'no label', 'FOTO_6': 'no label', 'FOTO_7': 'no label', 'FOTO_8': 'no label', });
lyr_Bangunan_Sadap_13.set('fieldLabels', {'NAME': 'inline label - visible with data', 'Descriptio': 'hidden field', 'pdfmaps_ph': 'hidden field', 'Photo_Name': 'hidden field', 'X': 'inline label - visible with data', 'Y': 'inline label - visible with data', 'BUJUR': 'inline label - visible with data', 'LINTANG': 'inline label - visible with data', 'PANJANG': 'inline label - visible with data', 'FOTO_1': 'no label', 'FOTO_2': 'no label', 'FOTO_3': 'no label', 'FOTO_4': 'no label', 'FOTO_5': 'no label', 'FOTO_6': 'no label', 'FOTO_7': 'no label', 'FOTO_8': 'no label', });
lyr_Sumur_Pompa_14.set('fieldLabels', {'NAME': 'inline label - visible with data', 'Descriptio': 'hidden field', 'pdfmaps_ph': 'hidden field', 'Photo_Name': 'hidden field', 'X': 'inline label - visible with data', 'Y': 'inline label - visible with data', 'BUJUR': 'inline label - visible with data', 'LINTANG': 'inline label - visible with data', 'PANJANG': 'inline label - visible with data', 'FOTO_1': 'no label', 'FOTO_2': 'no label', 'FOTO_3': 'no label', 'FOTO_4': 'no label', 'FOTO_5': 'no label', 'FOTO_6': 'no label', 'FOTO_7': 'no label', 'FOTO_8': 'no label', });
lyr_Sumur_Pompa_14.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});