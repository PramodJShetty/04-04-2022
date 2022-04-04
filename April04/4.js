var arr = [2,5,3];
let sum = 0;
let pro = 1;
for(i=0;i<arr.length;i++){
    pro *= arr[i];
    sum += arr[i];
}
console.log(pro,sum);