const dataFromserver = [
  {
    name:"jony",
    age:30,
  },
  {
    name : "sylvie",
    age : 30,
  },
  {
    name:"nana",
    age:1,
  },
];

const smaple ={};

if(sample ===""){
  console.log("없음");}
  else{
    console.log("잇음");
  }

const abc ={
  name: "치킨",
  type : "후라이드"
}
const {name, type} = abc;
console.log(name);
console.log(type);

const square = {
  width:200,
  height :200,
}

const colorSqare = {
  square,
  color:"red",
};

let bucketLists22 = [
  {id:3, text:'여행가기', done:false},
  {id:2, text:'치킨 먹기', done:true},
  {id:1, text:'코딩 하기', done:false},
];

const toggle = (key) =>
  bucketLists22.filter((bucketLists) => {
    if(bucketLists.id===key){
      if(bucketLists.done===false)bucketLists.done=true;
      else bucketLists.done=false}
    return bucketLists;
    });


console.log(toggle(2));
console.log(getValues('text'));
console.log(getValues('done'));
