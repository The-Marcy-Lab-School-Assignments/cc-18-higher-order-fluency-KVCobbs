//write your code here
function shortWords(words) {
    //filter 
    return words.filter(word => word.length < 5)
    /*
    return arr.filter(function(arr){
        return arr.length < 5;
    })
    */
}

function noVowel(words) {
    // map and filter and replace
  //  return words.filter(word => word./[a-z][aeiouy][a-z]/ )
  return words.map((word) => {word.replace(/[a-z][aeiouy][a-z]/ig , "x")})
}


function longToShort(words){
    // sort 
    return words.sort((a,b) => {return b.length - a.length})
    
  //  return arr1.length - arr2.length
}

function onlyVowelA (words) {
    //filter 
    words.filter(word => word.includes('a' || 'A'))
}

function pluralize (words) {
  // map
  return words.map((words) => {return `$words}s`})
}

function longerThanSeven (words) {
    //filter
    return words.some(word => word.length)
}

function oddLength (words) {
    //filter 
    
    return words.filter(word => word.length % 2 === 1)
}

function allFour (words) {
    //every 
    return word.every(word => word.length === 4);
}

function sum(numbers){
    //reduce
    return numbers.reduce((prev, curr) => return prev + curr)
}

function longWords(words) {
    //filter
    return words.filter(word => word.length < 3)
}

function uppercase(words) {
    return words.map((word => {return word[0].toUpperCase() + word.substring[1]})
}

function concatStrings(words) {
    // join , reduce 
    return words.reduce((prev, curr) => `${prev} ${curr}`)
}