

// function tombol submit
function hitungBmi() { 

    let jenisKelamin = document.getElementsByName("jenis-kelamin")
let beratBadan = document.getElementById("berat-badan").value;
let tinggiBadan = document.getElementById("tinggi-badan").value/100;

//rumus bmi
let bmi = beratBadan / (tinggiBadan**2);    
    
    //conditional
    if (bmi < 18.5) {
        document.getElementById("hasil-bmi").innerHTML=("Kamu kekurangan berat badan")
    }
    
    console.log(tinggiBadan);

}



function reset() {
    location.reload()
}




