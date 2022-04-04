const partOfString = (string, char) => {
    index = string.indexOf(char);
    new_string = string.slice(index);
    return new_string;
}
console.log(partOfString('PramodShetty', 'S'));
