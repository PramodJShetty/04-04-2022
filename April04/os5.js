string_chop =  function(str, size){
    if (str == null) return [];
    str = String(str);
    size = size;
return size > 0 ? str.match(new RegExp('.{1,' + size + '}', 'g')) : [str];
}
console.log(string_chop('Bangalore'));
console.log(string_chop('Karnataka',2));
console.log(string_chop('HassanJavagal',3));