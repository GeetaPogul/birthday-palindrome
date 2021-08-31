// function reverseStr(str){
//  var listOfChars = str.split('');

//  var reverseListOfChars = listOfChars.reverse();

//  var reverseStr = reverseListOfChars.join('');

//  return reverseStr;

// }

// // function ispalindrome(str){
// //     var reverse = reverseStr(str);
// //     console.log('hello')
// // }
// console.log(reverseStr('Hello'));

function reverseStr(str){
    var reverseStr;

    var listOfChars = str.split('');

    var reverseListOfChars = listOfChars.reverse();

    return reverseStr = reverseListOfChars.join('');

    // return reverseStr;
}


function ispalindrome(str){
  var reverse = reverseStr(str);

  if(str ===reverse){
      return true;
  }
  return false;

}
console.log(ispalindrome('geeta'));
console.log(ispalindrome('racecar'));
console.log(ispalindrome('dad'));
console.log(ispalindrome('oppo'));