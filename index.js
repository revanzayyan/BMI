// function
function hitungBmi() {
    let beratBadan = document.getElementById("berat-badan").value;
    let tinggiBadan = document.getElementById("tinggi-badan").value/100;

    let bmi = beratBadan / (tinggiBadan**2);

    //conditional

    if (bmi < 18.5) {
        document.getElementById("hasil-bmi").innerHTML=("Kamu kekurangan berat badan")
    }
    


}




