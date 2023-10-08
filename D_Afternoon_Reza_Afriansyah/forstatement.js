function generateColors() {

    let jumlahWarna = document.getElementById("jumlahWarna").value;
    let colorList = document.getElementById("colorList");

    let colors = ["Merah", "Hijau", "Biru", "Kuning", "Oranye", "Ungu", "Pink", "Coklat", "Abu-abu", "Hitam", "Putih", "Toska"];

    colorList.innerHTML = "";

    for (let i = 0; i < jumlahWarna; i++) {

        let colorIndex = i % colors.length;

        if (i + 1 > 25) {
            break;
        }    

        let listItem = document.createElement("li");
        listItem.textContent = "Warna ke-" + (i + 1) + ": " + colors[colorIndex];
        colorList.appendChild(listItem);
    }
}
