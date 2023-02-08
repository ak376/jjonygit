function palindrome(str) {
  let hol =0;
if(str.length%2===0)hol=str.length/2;
else hol=(str.length-1)/2;

for(let i =0; i<hol){
if(str[i]!=str[str.length-i]){
  return false;
  }i++
}return true;
}

// 출력
palindrome('level') => true
// palindrome('hi') => false