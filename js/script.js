function hitungKelilingSegitiga(sisi1, sisi2, sisi3) {
    return sisi1 + sisi2 + sisi3;
}

function hitungLuasSegitiga(alas, tinggi) {
    return 0.5 * alas * tinggi;
}

document.getElementById("hitungKeliling").addEventListener("click", function () {
    const sisiA = parseFloat(document.getElementById("sisiA").value);
    const sisiB = parseFloat(document.getElementById("sisiB").value);
    const sisiC = parseFloat(document.getElementById("sisiC").value);

    const keliling = hitungKelilingSegitiga(sisiA, sisiB, sisiC);

    document.getElementById("hasilKeliling").textContent = `Keliling segitiga adalah: ${keliling}`;
});

document.getElementById("hitungLuas").addEventListener("click", function () {
    const alas = parseFloat(document.getElementById("alas").value);
    const tinggi = parseFloat(document.getElementById("tinggi").value);

    const luas = hitungLuasSegitiga(alas, tinggi);

    document.getElementById("hasilLuas").textContent = `Luas segitiga adalah: ${luas}`;
});
