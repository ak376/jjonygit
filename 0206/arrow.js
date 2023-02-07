const a = function(){
  console.log("aa");
}

const b = () => { console.log("bb")};
const c = () => { console.log("cc")};

const sum = (a,b) => {return a+b};
sum(3,4);

//return 이 생략된 형태로 가능
const sum2 = (a,b) => a+b;
sum2(3,4);

const abt = (a) => a*a;
abt(3)