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
for(var i = 1; i <=100; i+=2){
	if(i%3 === 0){
		console.log(i + " Kelipatan 3")
	} else {
		console.log(i)
	}
}
console.log()

//LOOPING KEDUA KELIPATAN 6
for(var i = 1; i<=100; i+= 5){
	if(i%6 === 0){
		console.log(i + " Kelipatan 6")
	} else {
		console.log(i)
	}
}
console.log()

//LOOPING KETIGA KELIPATAN 10

for(var i = 1; i<=100; i+= 9){
	// console.log(c)
	if(i%10 === 0){
		console.log(i + " Kelipatan 10")
	} else {
		console.log(i)
	}
}
