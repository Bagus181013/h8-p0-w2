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
function counter1(){
    var temp=-1
    for(var i = 1; i <= 100; i++){
        temp+=2
        if ( temp%3 === 0){
            console.log( temp + ' Kelipatan 3')
        }else{
            console.log(temp)
        }
    }
}

//No.3
function counter2(){
    var temp=-4
    for(var i = 1; i <= 100; i++){
        temp+=5
        if( temp % 6 == 0){
            console.log(temp + ' Kelipatan 6');
        }else{
            console.log(temp)
        }
    }
}


//No.3
function counter3(){
    var temp=-8
    for(var i = 1; i <= 100; i++){
        temp+=9
        if(temp % 10 == 0){
            console.log( temp + ' Kelipatan 10');
        }else{
            console.log(temp)
        }
    }
}

function br(){
    console.log();
}

//output

counter1();
br();
counter2()
br();
counter3();
br();
