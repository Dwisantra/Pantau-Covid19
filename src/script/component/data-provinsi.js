class DataProvinsi extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <div class="container-md">
            <div class="col-12 d-flex justify-content flex-wrap">
                <h4>Data Berdasarkan Provinsi</h4>
                <div class="table-responsive text-nowrap mt-3 mb-5">
                    <table class="table">
                        <thead class="thead-dark">
                            <tr>
                                <th scope="col">Lokasi</th>
                                <th scope="col">Terkonfirmasi</th>
                                <th scope="col">Sembuh</th>
                                <th scope="col">Meninggal</th>
                            </tr>
                        </thead>
                        <tbody></tbody>
                    </table>
                </div>
            </div>
        </div>`;
    }
}

customElements.define("data-provinsi", DataProvinsi);