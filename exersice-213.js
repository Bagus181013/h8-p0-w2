
function xo(str) {
    var tempx=''
    var tempo=''
    for ( var i =0; i<=str.length-1; i++){
        if ( str[i]==='x'){
                tempx++
            }
            if ( str[i]==='o'){
                tempo++
            }
        }
        if (tempx==tempo){
            return true
        }else{
            return false
        }
  }
  // TEST CASES
  console.log(xo('xoxoxo')); // true
  console.log(xo('oxooxo')); // false
  console.log(xo('oxo')); // false
  console.log(xo('xxxooo')); // true
  console.log(xo('xoxooxxo')); // true