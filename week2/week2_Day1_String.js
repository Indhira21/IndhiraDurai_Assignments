/*Example 1 - Given a string s consisting of words and spaces,
 return the length of the last word in the string*/
let input1 = "Hello World";
let input2 = input1.split(" ");
console.log("Array of words in the string is:", input2);
let output1 = input2[input2.length-1].length;
console.log("Given string is:", input1);
console.log("Length of the last word in the string is:", output1);

/*Example 2 - Given a string s consisting of words and spaces, 
return the length of the last word in the string*/
let input3 = " fly me  to  the moonsss ";
let input4 = input3.trim().split(" ");
console.log("Array of words in the string is:", input4);
let output2 = input4[input4.length-1].length;
console.log("Given string is:", input3);
console.log("Length of the last word in the string is:", output2);

//Example 3 - Write a function that given strings are anagrams or not
function isAnagram(str1, str2) {
    console.log(`Given strings are ${str1} and ${str2}`);
    if (str1.length !== str2.length) {  
        console.log("Given strings are not anagrams");
        //compare the lengths of the strings
    }
    let sortedStr1 = str1.split("").sort().join("");
    //split it into an array of characters, sort the array in alphabetical order, and join it back into a string
    let sortedStr2 = str2.split("").sort().join("");
    if (sortedStr1 === sortedStr2) {
        console.log("Given strings are anagrams");
    } else {
        console.log("Given strings are not anagrams");
    }
}isAnagram("silent", "silent");