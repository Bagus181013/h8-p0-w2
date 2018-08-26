var nama='Dimas'
var peran='Penyihir'
if ( nama==='' && peran===''){
    console.log('Nama harus diisi!')
}
if (nama!=='' && peran===''){
    console.log ( 'Halo '+ nama +','+'Pilih Peranmu untuk memulai game')
}
if (nama!=='' && peran==='Ksatria'){
    console.log( 'Selamat datang di Dunia Proxytia, '+nama)
    console.log ( 'Halo Ksatria '+ nama +','+' kamu dapat menyerang dengan senjatamu!')
}
if (nama!=='' && peran=== "Tabib"){
    console.log ( 'Selamat datang di Dunia Proxytia, '+nama)
    console.log ( 'Halo Tabib '+ nama + ','+' kamu akan membantu temanmu yang terluka' )
}
if (nama!=='' && peran=== 'Penyihir'){
    console.log ( 'Selamat datang di Dunia Proxytia, '+nama)
    console.log ('Halo Penyihir '+nama+','+' ciptakan keajaiban yang membantu kemenangamu!')
}