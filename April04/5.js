arr = [1,2,3,3,2,1];

uniqueArr = [];
for(let i of arr){
    if(uniqueArr.indexOf(i)===-1){
        uniqueArr.push(i);
    }
}
console.log(uniqueArr);