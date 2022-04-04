var arr = [1,2,5,3,5,4,6,4,4,9,8];
let n = arr.length;
var fre = 1;
var m = 0;
var result;

for ( i = 0; i<n; i++){
    for(j=i;j<n;j++){
        if(arr[i]==arr[j]){
            m++;
            if(fre<m){
                result=arr[i];
            }
        }

    }
    m=0;
}

console.log(result);