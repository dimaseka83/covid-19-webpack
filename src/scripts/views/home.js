import { Country } from '../page/Country.js';

class Home extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="container">
            <div class="row">
                <div class="col-md-4">
                    <div class="card text-white bg-primary mb-3">
                        <div class="card-header">Terkonfirmasi</div>
                        <div class="card-body">
                            <h4 class="card-title" id="confirmed">0</h4>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card text-white bg-success mb-3">
                        <div class="card-header">Sembuh</div>
                        <div class="card-body"> 
                            <h4 class="card-title" id="recovered">0</h4>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card text-white bg-danger mb-3">
                        <div class="card-header">Meninggal</div>
                        <div class="card-body">
                            <h4 class="card-title" id="deaths">0</h4>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-header">
                            <h4>Silahkan Pilih Negara</h4>
                        </div>
                        <div class="card-body"> 
                            <div class="form-group">
                                <select class="form-control" id="country-select"></select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;
    new Country();
  }
}

customElements.define('home-page', Home);
