// MINGGU KE 2, TUGAS KE 6
// 1. Melakukan Looping Menggunakan While
console.log('LOOPING PERTAMA')
var a = 0;
var b = ('-');
var c = ( ' I love coding ')
while ( a<20){
    a=a+2
    console.log(a+' ' +b+' '+c)
}
// 2.
console.log('LOOPING KEDUA')
var a = 22;
var b = ('-');
var c = (' I will become fullstack developer')
while ( a>2){
    a=a-2
    console.log(a+' ' +b+' '+c)
}

// 3. ANGKA GANJIL DAN GENAP
var count=''
for ( var i = 0; i< 100; i++){
    count++
    if ( count%2===0){
        console.log( 'GENAP')
    }else{
        console.log( 'GANJIL')
    }
}
console.log()

var counter=''
for ( var i = 0; i< 100; i++){ 
    counter++
    if (counter=counter+2 ){
        console.log(counter +' kelipatan 3')
    }
}
console.log()
var counter =''
for ( var i = 0; i< 100; i++){
    counter++
    if ( counter = counter +5){
        console.log( counter + ' kelipatan 6 ')
    }
}
console.log()

var counter =''
for ( var i = 0; i< 100; i++){
    counter++
    if ( counter = counter +9){
        console.log( counter + ' kelipatan 10 ')
    }
}