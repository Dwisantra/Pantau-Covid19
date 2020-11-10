import '../component/app-bar';
import '../component/main-info.js';
import '../component/data-provinsi.js';

function main() {
    const idInfo = document.querySelector("main-info");

    const getDataId = () => {
        fetch('https://covid19.mathdro.id/api/countries/Indonesia/confirmed')

        .then(response => {
            return response.json();
        })
        .then(responseJson => {
            if(responseJson.error) {
                showResponseMessage(responseJson.message);
            }else{
                renderResult(responseJson);
            }
        })
        .catch(error => {
            showResponseMessage(responseJson);
        })
    
        const showResponseMessage = (message = "Periksa koneksi internet anda") => {
            alert(message);
        };
    
        const renderResult = results => {
            idInfo.values = results;
        }
    }

    const getDataProvinsi = () => {
        fetch('https://indonesia-covid-19.mathdro.id/api/provinsi')

        .then(response => {
            return response.json();
        })
        .then(responseJson => {
            if(responseJson.error) {
                showResponseMessage(responseJson.message);
            }else{
                renderAllProvinsi(responseJson.data);
            }
        })
        .catch(error => {
            showResponseMessage(error);
        })

    }

    const renderAllProvinsi = (provinsi) => {
        const tBodyElement = document.querySelector('tbody');
        tBodyElement.innerHTML = "";

        provinsi.forEach(provinsi => {
            tBodyElement.innerHTML += `
            <tr>
                <th scope="row" class="provinsi">${provinsi.provinsi}</th>
                <td>${provinsi.kasusPosi}</td>
                <td>${provinsi.kasusSemb}</td>
                <td>${provinsi.kasusMeni}</td>
            </tr>`;
        })
    }

    getDataId();
    getDataProvinsi();
}

export default main;