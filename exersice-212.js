//MINGGU KE 2, TUGAS KE 11
// 1. 
var counter='0'
var waktu=60
var jam=''
function konversiMenit(menit) {
    if ( menit<waktu){
        jam=0
    }
    if ( menit-waktu>1){
        jam = 1
    }
    if ( menit - waktu>=60){
        jam = 2
    }
    if ( menit > 60){
        menit = menit%60
        if ( menit <10){
            menit = counter + menit
        }else{
            menit = menit
        }
    }
    return jam +':'+ menit
}
  // TEST CASES
  console.log(konversiMenit(63)); // 1:03
  console.log(konversiMenit(124)); // 2:04
  console.log(konversiMenit(53)); // 0:53
  console.log(konversiMenit(88)); // 1:28
  console.log(konversiMenit(120)); // 2:00