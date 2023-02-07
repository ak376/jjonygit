const arr = [1,2,3,4,5]

//some
const result1 = arr.some(element => element<0);
const result2 = arr.some(element => element >4);

let flag = true;

for(let  i=0 ; i<arr.length; i++){
  if(arr[i]<0 ){
    flag=false;
    break;
  }
}
//every

const everyResult1 = arr.every(element => element>0);
const everyResult2 = arr.every(element => element>3);