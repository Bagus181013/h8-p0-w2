//MINGGU KE 2, TUGAS KE 9
// 1. 
function shoutOut(){
    var a = 'Halo Function!'
    return a
}
console.log(shoutOut()) // Menampilkan "Halo Function!" di console

// 2.
var num1 = 5;
var num2 = 6;
function calculateMultiply(num1, num2){
    return num1*num2
}

var hasilPerkalian = calculateMultiply(num1,num2);
console.log(hasilPerkalian); // Menampilkan angka 30

// 3.
var name = "Agus";
var age = 30;
var address = "Jln. Malioboro, Yogjakarta";
var hobby = "gaming";

function processSentence(name,age,address,hobby){
    console.log('Nama saya '+name+','+'umur saya '+age+' tahun,'+' alamat saya di '+address+','+' dan saya punya hobby yaitu '+hobby+'!')
}

var fullSentence = processSentence(name,age,address,hobby);
console.log(fullSentence); // Menampilkan "Nama saya Agus, umur saya 30 tahun, alamat saya di Jln. Malioboro, Yogjakarta, dan saya punya hobby yaitu gaming!"