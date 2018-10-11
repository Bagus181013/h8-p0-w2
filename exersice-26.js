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

function counter1(){
    for(var i = 1; i <= 100; i++){
        if(i % 2 == 0){
            console.log(i + ' - Genap');
        }else{
            console.log(i + ' - Ganjil');
        }
    }
}

// No.3
function counter2(){
    for(var i = 1; i <= 100; i=i+2){
        if(i % 3 == 0){
            console.log(i + ' Kelipatan 3');
        }
    }
}

//No.3
function counter5(){
    for(var i = 1; i <= 100; i=i+5){
        if(i % 6 == 0){
            console.log(i + ' Kelipatan 6');
        }
    }
}


//No.3
function counter9(){
    for(var i = 1; i <= 100; i=i+9){
        if(i % 10 == 0){
            console.log(i + ' Kelipatan 10');
        }
    }
}

function br(){
    console.log();
}

//output
counter1();
br();
counter2();
br();
counter5()
br();
counter9();
br();
