// const studentInfo={
//   name:"이자룡",
//   age:31,
//   address : "경기도 군포시",
//   family:["나","고양이","와이프"],
//   skill:{
//     client:["vue.js","vanilla","react"],
//     server:["django","php","node.js"],
//     db:["sqlite","mongo","mysql","postgresql"],
//   },
//   sayHi:() => console.log("HHI"),
// };

// studentInfo.sayHi();
// sayMyName(){
//   console.log(`my name is ${this.name}`);
// }
// setAddress(address){
//   this.address=address;
// }
// const student1 = new studentInfo("jony",30);
// const student2 = new studentInfo("david",50);

const studentInfo = {
  name:"",
  age : -1,
  address:"",
  constructor :function(name, age){
    this.name =name,
    this.age=age;
  },
  sayMyName : function(){console.log(`my name is ${this.name}`)},
  setAddress : (address)=>this.address=address,
  getAddress:()=>this.address,
  useMethod :() => this.sayMyName(),
};

student1.constructor("jony",30),
student2.constructor("david",50),
student1.sayMyName();
student1.setAddres("경기 군포시 산봉동");
console.log(student1.getAddress());
student1.useMethod();

const Lawyer ={
  name:"",
  age:"",
  introduce:"",
  constructor(name,age,introduce){
    this.name=name;
    this.age=age;
    this.introduce=introduce;
  }
};
const person1 = new Lawyer("우영우",24,"기러기 토마토 스위스 역삼역");


const person2 =new Lawyer();
person2.name="최수연";
person2.age="27";
person2.introduce="봄날의 햇살";