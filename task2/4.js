function same(a1,a2)
{
    var result = 0;
    for(var i = 0;i<a1.length;i++){
        for(var j = 0;j<a2.length;j++){
            if(a1[i] === a2[j])
            {
                result++;
            }
        }  
    }
    return result;
    
}
console.log(same([1,2,3,4],[1,2,3,4]));
console.log(same([1,2,3,5,6],[1,2,3,4]));
console.log(same([4,5,6,7,8],[1,2,3,4]));

