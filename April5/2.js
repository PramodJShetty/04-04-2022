const concatString = (string) => {
    return string.concat('!');
}

const result = (concat) => {
    console.log(concat('Topcentile'));
}

result(concatString);