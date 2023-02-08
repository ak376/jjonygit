const studentInfo=[
{
  name:"jony",
  age : 30,
},
{
  name:"sylbile",
  age : 20,
},
{
  name:"nanan",
  age : 1,
},
];

const  newStudentInfo = studentInfo.reduce((acc, cur)=>{
  if(cur.age===30)acc.push(cur.name)
  return acc;
},[])

newStud