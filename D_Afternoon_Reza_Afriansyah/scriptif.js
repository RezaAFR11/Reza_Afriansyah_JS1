function cekump(provinsi) {
    let ump;

    if (provinsi === 'DKI Jakarta') {
        ump = 'Sekitar 4 Juta'; 
    } else if (provinsi === 'Papua' || provinsi === 'Kalimantan Utara' || provinsi === 'Sulawesi Selatan') {
        ump = 'Sekitar 3 Juta';
    } else if (provinsi === 'Riau' || provinsi === 'Sumatra Utara') {
        ump = 'Sekitar 2 Juta';
    } else {
        ump = 'Sekitar 1 Juta';
    }

    let hasilElement = document.getElementById('ump');
    hasilElement.textContent = `Provinsi "${provinsi}" ump-nya adalah ${ump}.`;
}