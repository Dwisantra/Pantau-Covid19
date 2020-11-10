import ImageJumbotron from "../../asset/images/undraw_medical_research_qg4d.svg";

class MainInfo extends HTMLElement {
    set values(values) {
        this._values = values[0];
        this.render();
    }

    render() {
        const date = new Date(this._values.lastUpdate);
        const options = { dateStyle: 'long', timeStyle: 'long'};
        const tanggal = date.toLocaleString('id', options);

        this.innerHTML = `
        <style>
            .jumbotron{
                background-color: rgb(33, 66, 82, .9);
                height: 90vh;
            }
            h1, h3{
                color: #ffffff;
            }
            h3{
                margin-top: 4rem;
            }
            p{
                color: #ebebeb;
            }
            .card{
                background-color: rgb(235, 235, 235, .6);
                margin: 0 10px 10px 10px;
                padding: 6px 6px;
            }
            .meninggal{
                color: #f05454;
                font-size: 3.4rem;
                font-weight: 700;
            }
            .sembuh{
                color: #a8dda8;
                font-size: 3.4rem;
                font-weight: 700;
            }
            .dikonfirmasi{
                color: #ffe05d;
                font-size: 3.4rem;
                font-weight: 700;
            }
            .image-background{
                background: url(${ImageJumbotron});
                background-attachment: fixed;
                background-size: cover;
                background-repeat: no-repeat;
            }
            .date{
                font-size: 1.6rem;
                color: #e8e8e8;
            }
            .date-info{
                margin-top: 60px;
                color: #ffffff;
            }

            @media screen and (max-width: 760px){
                .jumbotron{
                    background-color: rgb(33, 66, 82, .9);
                    height: 150vh;
                }
            }
        </style>
        <div class="image-background">
            <div class="jumbotron jumbotron-fluid">
                <div class="container-md text-body">
                    <h1>Informasi Data Covid-19</h1>
                    <p>Informasi data pada situs ini diperoleh dari <a>covid19.mathdro.id</a></a></p>
                </div>
                <div class="container-md main-content d-flex justify-content-center flex-column">
                    <h3>Jumlah Kasus di ${this._values.countryRegion} Saat Ini</h3>
                    <div class="container d-flex justify-content-around flex-wrap mt-3">
                        <div class="col-12 col-lg-3 card text-white">
                            <div class="card-body">
                                <span class="value dikonfirmasi">${this._values.confirmed}</span>
                                <h4>Terkonfirmasi</h4> 
                                </div>
                            </div>
                        <div class="col-12 col-lg-3 card text-white">
                            <div class="card-body">
                                <span class="value sembuh">${this._values.recovered}</span>
                                <h4>Sembuh</h4>
                            </div>
                        </div>
                        <div class="col-12 col-lg-3 card text-white">
                            <div class="card-body">
                            <span class="value meninggal">${this._values.deaths}</span>                                     <h4>Meninggal</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container-md text-left date-info">
                    <span>Pembaruan Terakhir : <br>
                        <span class="date">${tanggal}</span>
                    </span>
                </div>
            </div>
        </div>`;
    }
}

customElements.define("main-info", MainInfo);