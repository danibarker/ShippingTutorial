/*here are some stones on Bob's table in a row, and each of them can be red, green or blue, indicated by the characters R, G, and B.

Help Bob find the minimum number of stones he needs to remove from the table so that the stones in each pair of adjacent stones have different colours.

Examples:

"RGBRGBRGGB"   => 1
"RGGRGBBRGRR"  => 3
"RRRRGGGGBBBB" => 9
*/
let string = "RGBRGBRGGB"
console.log(string[0]) //R
string[0] === string[1] // false (checks if 0th value equals 1st value)
let count=0
for (letter of string) {  //loops through each letter of the string
    count++ //adds one to count
    
    console.log(letter)
    console.log(string[count] === string[count+1]) //checks the current letter equals the following letter
}
