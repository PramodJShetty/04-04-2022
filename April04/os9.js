let string = 'the bike is very nice. the car is very nice';
search_string = 'the';
const firstOccurance = (string, search_string) => {
    index_of_search_string = (string.indexOf(search_string));
    return string.slice(0, index_of_search_string) + string.slice(index_of_search_string + search_string.length);
}
console.log(firstOccurance(string, search_string));