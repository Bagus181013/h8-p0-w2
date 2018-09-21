// MINGGU KE 2, TUGAS KE 7
// 1. Menyusun Barisan Bintang
console.log( '1. ouput:')
var rows1=5
var tampung=''
for ( var i=0; i<rows1; i++){
    tampung='*'
    console.log(tampung)
}

console.log() // buat jarak baris

//2. Menyusun Barisan Bintang Dengan Nested Looping
console.log('2. ouput:')
var rows1=5
for ( var i=0; i<rows1; i++){
    tampung=''
    for (var j=0; j<rows1;j++){
        tampung+='*'
    }
    console.log(tampung)
}

console.log() // buat jarak baris 

// 3. Menyusun Barisan Tangga Bintang Dengan Nested Looping
console.log('3. ouput:')
var rows1=5
var tampung=''
for ( var i=0; i<rows1; i++){
    tampung+='*'
    console.log(tampung)
}
