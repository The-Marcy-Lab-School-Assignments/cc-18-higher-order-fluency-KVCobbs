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
    // filter and replace
  //  return words.filter(word => word./[a-z][aeiouy][a-z]/ )
}

function longToShort(words){
    // sort 
    return words.sort((a,b) => {return b.length - a.length})
    
  //  return arr1.length - arr2.length
}

function onlyVowelA (words) {
    //filter 
}

function pluralize (words) {
  // map
  return words.map((words) => {return `$words}s`})
}

function longerThanSeven (words) {
    
}

function oddLength (words) {
    //filter 
    
    return words.filter(word => word.length % 2 === 1)
}

function allFour (words) {
    
}

function sum(numbers){
    //reduce
    return numbers.reduce((prev, curr) => return prev + curr)
}

function longWords(words) {
    return words.filter(word => word.length < 3)
}

function uppercase(words) {
    return words.map((word => {return word[0].toUpperCase() + word.substring[1]})
}

function concatStrings(words) {
    // reduce 
    return words.reduce('string') => 
}