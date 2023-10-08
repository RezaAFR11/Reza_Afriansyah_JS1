function cekhari() {
    let dropdown = document.getElementById("dropdown");
    let hari = dropdown.value;

    let jenishari;
    switch (hari) {
        case "senin":
        case "selasa":
        case "rabu":
        case "kamis":
        case "jumat":
            jenishari = "Belajar";
            break;
        case "sabtu":
        case "minggu":       
            jenishari = "Libur";
            break;
        default:
            jenishari = "Input tidak valid"    
    }

    let hasilElement = document.getElementById('hasil');
    hasilElement.textContent = `Hari ${hari} saya ${jenishari}`;
}