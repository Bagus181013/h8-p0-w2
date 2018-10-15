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
console.log()
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


// No.3
//LOOPING PERTAMA KELIPATAN 3
for(var a = 1; a <=100; a+=2){
	if(a%3 === 0){
		console.log(a + " Kelipatan 3")
	} else {
		console.log(a)
	}
}
console.log()

//LOOPING KEDUA KELIPATAN 6
for(var b = 1; b<=100; b+= 5){
	if(b%6 === 0){
		console.log(b + " Kelipatan 6")
	} else {
		console.log(b)
	}
}
console.log()

//LOOPING KETIGA KELIPATAN 10

for(var c = 1; c<=100; c+= 9){
	// console.log(c)
	if(c%10 === 0){
		console.log(c + " Kelipatan 10")
	} else {
		console.log(c)
	}
}
