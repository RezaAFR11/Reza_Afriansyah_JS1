function evaluasiReview() {
    let bintang = document.getElementById("bintang").value;
    let hasilElemen = document.getElementById("rating");
    let hasil = "";

    if (bintang >= 4 && bintang <= 5) {
        hasil = "Makanan enak!";
    } else if (bintang >= 2 && bintang <= 3) {
        hasil = "Makanan biasa.";
    } else if (bintang >= 0 && bintang <= 1) {
        hasil = "Makanan tidak enak.";
    } else {
        hasil = "Rating tidak valid.";
    }

    hasilElemen.textContent = hasil;
}
