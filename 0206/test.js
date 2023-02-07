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

  constructor(name,age,introduce){
    this.name=name;
    this.age=age;
    this.introduce=introduce;
  },

  intro(){
    console.log(`이름 : ${this.name}`);
    console.log(`age : ${this.age}`);
    console.log(`inro : ${this.introduce}`);
  }
}
const person1 = new Lawyer("우영우",24,"기러기 토마토 스위스 역삼역");
person1.intro();

class Hero {
  constructor(hp){
    this.hp=hp;
  }
  showHP(){
    console.log("hp는 "+this.hp);
  }
  run(){
    this.hp=this.hp-10;
  }
}
const batman = new Hero(100);
batman.showHP();
batman.run();
batman.run();

class Person{
  constructor(name,hp){
    this.name=name;
    this.hp=hp;
  }
  hello(){
    console.log(this.name);
  }
}
class Avengers extends Person{
  constructor(hp, name,power, skill){
    super(hp);
    super(name);
    this.power=power;
    this.skill=skill;
  }
  information(){
    console.log(this.name+this.hp+this.power+this.skill);
  }
  fly(){
    console.log("비행중");
  }
}