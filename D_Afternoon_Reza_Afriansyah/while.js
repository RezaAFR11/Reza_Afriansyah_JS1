function generateTable() {
    let number = parseInt(document.getElementById("number").value);
    let tableHTML = "<table border='1'><tr><th>Number</th><th>Multiplication</th></tr>";
    let multiplier = 1;

    while (multiplier <= 10) {
        let result = number * multiplier;
        tableHTML += "<tr><td>" + number + "</td><td>" + number + " × " + multiplier + " = " + result + "</td></tr>";
        multiplier++;
    }

    tableHTML += "</table>";
    document.getElementById("table").innerHTML = tableHTML;
}
