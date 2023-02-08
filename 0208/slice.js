const names = ["jony","sylvie","nana"]

//slice => 원본배열 훼손 x (인덱스, 인덱스전)
const newNames = names.slice(1,2);
console.log(newNames);
console.log(names);

//splice =>원본배열에서 추출, 훼손o (인덱스, 개수, 아이템추가)

const newNames = names.splice(1,2);
console.log(newNames);
console.log(names);