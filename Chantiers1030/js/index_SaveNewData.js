let geojson = {
    "name": "NewFeatureType",
    "type": "FeatureCollection",
    "features": [{
        "id": "",
        "type": "Feature",
        "properties": {
            "popupContent": "",
            "Numident": "",
            "Espece": "",
            "Statut_arbre": "",
            "Type_lieu": "",
            "Danger": "",
            "Date_plantation": "",
            "Adresse": "",
            "Type_sol": "",
            "Environnement": "",
            "Distribution": "",
            "Circonference": "",
            "Hauteur": "",
            "Troncs_multiples": "",
            "Diametre_couronne": "",
            "Structure": ""
        },
        "geometry": {
            "type": "Point",
            "coordinates": []
        }
    }]
};

geojson.features[0].geometry.coordinates.push([LatitudeArb, LongitudeArb]);
geojson.features[0].properties.popupContent.push(EspeceArb)
geojson.features[0].properties.Numident.push(NumidArb)
geojson.features[0].properties.Espece.push(EspeceArb)
geojson.features[0].properties.Statut_Arbre.push(StatutArb)
geojson.features[0].properties.Type_lieu.push(TypeLieuPlantaArb)
geojson.features[0].properties.Danger.push(DangerArb)
geojson.features[0].properties.Date_plantation.push(DatePlantArb)
geojson.features[0].properties.Adresse.push(AdresseArb)
geojson.features[0].properties.Type_sol.push(LieuPlantaArb)
geojson.features[0].properties.Environnement.push(TypeEnvirArb)
geojson.features[0].properties.Distribution.push(TypeDistrArb)
geojson.features[0].properties.Circonference.push(CirconfArb)
geojson.features[0].properties.Hauteur.push(HauterArb)
geojson.features[0].properties.Troncs_multiples.push(MultiTroncArb)
geojson.features[0].properties.Diametre_couronne.push(DiamCourArb)
geojson.features[0].properties.Structure.push(StructureArb)
geojson.features[0].properties.Image.push(ImageArb)
geojson.features[0].properties.Commentaires.push(CommentairesArb)