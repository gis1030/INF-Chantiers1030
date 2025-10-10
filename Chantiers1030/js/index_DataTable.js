// BEGIN ======== Dnnes GeoJson dans une table =======
let geoJSON = []
let featureNames = []
let DataTree1030_NEW = [];
let DataTree1030 = [];
for (let j = 0; j < 2; j++) {
    geoJSON = [];
    featureNames = [];
    if (j == 0) {
        geoJSON = ListTreesMarkers1030;
    } else {
        geoJSON = ListTreesMarkers1030_NEW;
    }
    for (let i = 0; i < geoJSON.features.length; i++) {
        let featureLatitude = geoJSON.features[i].geometry.coordinates[1]
        let featureLongitude = geoJSON.features[i].geometry.coordinates[0]

        let currentFeature = geoJSON.features[i];

        let featureNumident = currentFeature.properties.Numident;
        let featureEspece = currentFeature.properties.Espece;
        let featureStatut_arbre = currentFeature.properties.Statut_arbre;
        let featureType_lieu = currentFeature.properties.Type_lieu;
        let featureDanger = currentFeature.properties.Danger;
        let featureDate_plantation = currentFeature.properties.Date_plantation;
        let featureAdresse = currentFeature.properties.Adresse;
        let featureType_sol = currentFeature.properties.Type_sol;
        let featureEnvironnement = currentFeature.properties.Environnement;
        let featureDistribution = currentFeature.properties.Distribution;
        let featureCirconference = currentFeature.properties.Circonference;
        let featureHauteur = currentFeature.properties.Hauteur;
        let featureTroncs_multiples = currentFeature.properties.Troncs_multiples;
        let featureDiametre_couronne = currentFeature.properties.Diametre_couronne;
        let featureStructure = currentFeature.properties.Structure;
        let featureImage = currentFeature.properties.Image;
        let featureCommentaires = currentFeature.properties.Commentaires;

        featureNames.push({
            featureNumident: featureNumident,
            featureEspece: featureEspece,
            featureStatut_arbre: featureStatut_arbre,
            featureType_lieu: featureType_lieu,
            featureDanger: featureDanger,
            featureDate_plantation: featureDate_plantation,
            featureLatitude: featureLatitude,
            featureLongitude: featureLongitude,
            featureAdresse: featureAdresse,
            featureType_sol: featureType_sol,
            featureEnvironnement: featureEnvironnement,
            featureDistribution: featureDistribution,
            featureCirconference: featureCirconference,
            featureHauteur: featureHauteur,
            featureTroncs_multiples: featureTroncs_multiples,
            featureDiametre_couronne: featureDiametre_couronne,
            featureStructure: featureStructure,
            featureImage: featureImage,
            featureCommentaires: featureCommentaires,
        });
    }
    if (j == 0) {
        DataTree1030 = featureNames;
    } else {
        DataTree1030_NEW = featureNames;
    }
}
// console.log(DataTree1030[0])
// console.log(DataTree1030_NEW[0])

i = 1041
document.querySelector("#NumidArb").value = DataTree1030[i].featureNumident
document.querySelector("#EspeceArb").value = DataTree1030[i].featureEspece
document.querySelector("#StatutArb").value = DataTree1030[i].featureStatut_arbre
document.querySelector("#TypeLieuPlantaArb").value = DataTree1030[i].featureType_lieu
document.querySelector("#DangerArb").value = DataTree1030[i].featureDanger
document.querySelector("#DatePlantArb").value = DataTree1030[i].featureDate_plantation
document.querySelector("#LatitudeArb").value = DataTree1030[i].featureLatitude
document.querySelector("#LongitudeArb").value = DataTree1030[i].featureLongitude
document.querySelector("#AdresseArb").value = DataTree1030[i].featureAdresse
document.querySelector("#LieuPlantaArb").value = DataTree1030[i].featureType_sol
document.querySelector("#TypeEnvirArb ").value = DataTree1030[i].featureEnvironnement
document.querySelector("#TypeDistrArb").value = DataTree1030[i].featureDistribution
document.querySelector("#CirconfArb").value = DataTree1030[i].featureCirconference
document.querySelector("#HauterArb").value = DataTree1030[i].featureHauteur
document.querySelector("#MultiTroncArb").value = DataTree1030[i].featureTroncs_multiples
document.querySelector("#DiamCourArb").value = DataTree1030[i].featureDiametre_couronne
document.querySelector("#StructureArb").value = DataTree1030[i].featureStructure
//document.querySelector("#ImageArb").value=DataTree1030[i].featureImage
//document.querySelector("#CommentairesArb").value=DataTree1030[i].featureCommentaires







// END ======== Dnnes GeoJson dans une table =======