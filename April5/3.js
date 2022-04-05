const duplicate = (string, b) => {
    for(i=0;i<string.length;i++){
        b+=string[i].repeat(2);       
    }
    console.log(b);
}

const result = (callback) => {
    string = 'abc';
    b = '';
    callback(string,b);
}

result(duplicate);