let reference;

const loadReference = () => {
    return fetch('reference.json')
        .then(response => response.json())
        .then(json => json);
}

const viewCard = () => {
    let html = ``;
    const daftarKarya = document.querySelector('#daftar-karya');

    reference.forEach((e, i) => {
        html += `
        <div class="col-md-4 col-lg-3 col-sm-6 text-center">
            <div class="card">
                <img src="img/${e.gambar}" class="card-img-top" alt="${e.nama}">
                <div class="card-body">
                    <h5 class="card-title">${e.nama}</h5>
                    <a href="" class="btn btn-primary mt-4 detail-button" data-bs-toggle="modal" data-bs-target="#detailModal" data-id="${i}">Detail</a>
                </div>
            </div>
        </div>
        `;
    });
    daftarKarya.innerHTML = html;

    const detailButton = document.querySelectorAll('.detail-button');
    detailButton.forEach(e => {
        e.addEventListener('click', function () {
            const dataId = this.dataset.id;
            detailCard(dataId);
        });
    })
}

const detailCard = (id) => {
    const karya = reference[id];
    const detailModal = document.querySelector('#detail-karya');

    let html = `
    <div class="row mb-5">
        <div class="col">
            <img src="img/${karya.gambar}" alt="${karya.nama}" class="img-fluid">
        </div>
    </div>
    <div class="row">
        <div class="col">
            <ul class="list-group">
                <li class="list-group-item"><strong>Nama Benda : </strong>${karya.nama}</li>
                <li class="list-group-item"><strong>Bentuk : </strong>${karya.bentuk}</li>
                <li class="list-group-item"><strong>Jenis : </strong>${karya.jenis}</li>
                <li class="list-group-item"><strong>Kegunaan : </strong>${karya.kegunaan}</li>
            </ul>
        </div>
    </div>
    `;
    detailModal.innerHTML = html;
}

const load = async () => {
    reference = await loadReference();
    viewCard();
}

document.body.onload = load;