function HTMLTableViewer(jsonSEARCH) {
    let geoJSON = []
    let featureNames = []
    let Data1030 = [];

    geoJSON = jsonSEARCH;
    //console.log(geoJSON);

    for (let i = 0; i < geoJSON.features.length; i++) {

        let Latitude = geoJSON.features[i].geometry.coordinates[1]
        let Longitude = geoJSON.features[i].geometry.coordinates[0]

        let currentFeature = geoJSON.features[i];

        let Chantier = currentFeature.properties.Chantier;
        let Demandeur = currentFeature.properties.Nom;
        let ReferenceInterne = currentFeature.properties.ReferenceInterne;
        let Nature = currentFeature.properties.Nature;
        let DateDebut = currentFeature.properties.DateDebut;
        let DateFin = currentFeature.properties.DateFin;
        let Duree = currentFeature.properties.Duree;
        let Statut = currentFeature.properties.Statut;
        let Gestionnaire = currentFeature.properties.Gestionnaire;
        let Responsable = currentFeature.properties.Responsable;
        let Organisation = currentFeature.properties.Organisation;
        let Regime = currentFeature.properties.Regime;
        let Rues = currentFeature.properties.Rues;
        let ClasseVoirieMax = currentFeature.properties.ClasseVoirieMax;
        let Surface = currentFeature.properties.Surface;
        let AvisCCC = currentFeature.properties.AvisCCC;
        let Urgence = currentFeature.properties.Urgence;
        let ZonesPolice = currentFeature.properties.ZonesPolice;
        let SymbolInfo = currentFeature.properties.SymbolInfo;
        let DateDebutAutorisee = currentFeature.properties.DateDebutAutorisee;
        let DateFinAutorisee = currentFeature.properties.DateFinAutorisee;
        let Appelant = currentFeature.properties.Appelant;
        let Pilote = currentFeature.properties.Pilote;
        let ImpetrantsCoordonnes = currentFeature.properties.ImpetrantsCoordonnes;
        let Coordinateurs = currentFeature.properties.Coordinateur;

        //window.alert(i);
        //window.alert(geoJSON.features.length);

        Data1030.push({
            Chantier: Chantier,
            Demandeur: Demandeur,
            ReferenceInterne: ReferenceInterne,
            Nature: Nature,
            DateDebut: DateDebut,
            DateFin: DateFin,
            Duree: Duree,
            Statut: Statut,
            Gestionnaire: Gestionnaire,
            Responsable: Responsable,
            Organisation: Organisation,
            Regime: Regime,
            Rues: Rues,
            ClasseVoirieMax: ClasseVoirieMax,
            Surface: Surface,
            AvisCCC: AvisCCC,
            Urgence: Urgence,
            ZonesPolice: ZonesPolice,
            SymbolInfo: SymbolInfo,
            DateDebutAutorisee: DateDebutAutorisee,
            DateFinAutorisee: DateFinAutorisee,
            Latitude: Latitude,
            Longitude: Longitude,
            Appelant: Appelant,
            Pilote: Pilote,
            ImpetrantsCoordonnes: ImpetrantsCoordonnes,
            Coordinateurs: Coordinateurs,
        });
    }

    let res = document.querySelector('#res');
    res.innerHTML = '';

    for (let item of Data1030) {
        res.innerHTML += `
        <tr>
            <td>${item.Chantier}</td>
            <td>${item.Duree}</td>
            <td>${item.AvisCCC}</td>
            <td>${item.DateDebut}</td>
            <td>${item.DateFin}</td>
            <td>${item.DateDebutAutorisee}</td>
            <td>${item.DateFinAutorisee}</td>
            <td>${item.Nature}</td> 
            <td>${item.Demandeur}</td>
            <td>${item.Gestionnaire}</td>
            <td>${item.ReferenceInterne}</td>
            <td>${item.Organisation}</td>
            <td>${item.Responsable}</td>
            <td>${item.Surface}</td>
            <td>${item.Urgence}</td>
            <td>${item.Regime}</td>
            <td>${item.ClasseVoirieMax}</td>
            <td>${item.Statut}</td>
            <td>${item.Rues}</td>
            <td>${item.ZonesPolice}</td>
            <td>${item.Appelant}</td>
            <td>${item.Pilote}</td>
            <td>${item.ImpetrantsCoordonnes}</td>
            <td>${item.Coordinateurs}</td>
        </tr>
        `
    }

}

/* comentarios 
            <th>${item.Chantier}</th>
            <th>${item.Duree}</th>
            <th>${item.AvisCCC}</th>
            <th>${item.DateDebut}</th>
            <th>${item.DateFin}</th>
            <th>${item.DateDebutAutorisee}</th>
            <th>${item.DateFinAutorisee}</th>
            <th>${item.Demandeur}</th>
            <th>${item.ReferenceInterne}</th>
            <th>${item.Nature}</th> 
            <th>${item.Gestionnaire}</th>
            <th>${item.Statut}</th>
            <th>${item.Surface}</th>
            <th>${item.Urgence}</th>
            <th>${item.ClasseVoirieMax}</th>
            <th>${item.Rues}</th>
 */

//  +++++++++++++ Exportacion e Importacion de archivos CSV +++++++++++++
// BEGIN ----------------------------------------------------------------
const toCsv = function (table) {
    // Query all rows
    const rows = table.querySelectorAll('tr');

    return [].slice.call(rows)
        .map(function (row) {
            // Query all cells
            const cells = row.querySelectorAll('th,td');
            return [].slice.call(cells)
                .map(function (cell) {
                    return cell.textContent;
                })
                .join(',');
        })
        .join('\n');
};

const download = function (text, fileName) {
    const link = document.createElement('a');
    link.setAttribute('href', `data:text/csv;charset=utf-8,${encodeURIComponent(text)}`);
    link.setAttribute('download', fileName);

    link.style.display = 'none';
    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);
};

const table = document.getElementById('exportMe');
const exportBtn = document.getElementById('export');

exportBtn.addEventListener('click', function () {
    // Export to csv
    const csv = toCsv(table);

    // Download it
    download(csv, 'Data1030.csv');
});

// END ------------------------------------------------------------------
//  +++++++++++++ Exportacion e Importacion de archivos CSV +++++++++++++