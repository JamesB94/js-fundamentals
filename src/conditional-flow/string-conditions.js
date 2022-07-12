// Use conditional statements to set answerOne to true if STR_ONE is 'Hello'
const STR_ONE = 'Hello'

let answerOne

if (STR_ONE === 'Hello' ){
  answerOne = true
} else {
  answerOne = false
}



// Use conditional statements to set answerTwo to true if STR_TWO is not 'Hello'
const STR_TWO = 'Goodbye'

let answerTwo
if (STR_TWO !== 'Hello'){
    answerTwo = true
} else {
  answerTwo = false
}



// Use conditional statements to set answerThree to true if STR_THREE is
// longer than STR_FOUR
const STR_THREE = 'Hello'
const STR_FOUR = 'Good'

let answerThree

if (STR_THREE.length > STR_FOUR.length){
  answerThree = true
} else {
  answerThree = false
}



// Use a combination of a loop and conditional statements to set answerFour
// to false if STR_FIVE has an odd number of vowels, or true if it has an
// even number
const STR_FIVE = 'Alex'

const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']

let answerFour

let vowelsSeen = 0

for (let i = 0; i < STR_FIVE.length; i++) {
    const currentCharacter = STR_FIVE[i]

    for (let j = 0; j < vowels.length; j++) {
        const currentVowel = vowels[j]

        if (currentCharacter === currentVowel) {
            vowelsSeen++
        }
    }
}

answerFour = vowelsSeen % 2 === 0

// Use a combination of a loop and conditional statements to set answerFive
// to false if STR_SIX has an odd number of vowels, or true if it has an
// even number
const STR_SIX = 'Joanna'

let answerFive




// Use conditional statements to set answerSix to the middle character of STR_SEVEN
// if STR_SEVEN has an odd number of characters
const STR_SEVEN = 'Kayla'

let answerSix




// Use conditional statements to set answerSeven to the middle two characters of
// STR_EIGHT if STR_EIGHT has an even number of characters
const STR_EIGHT = 'Alex'

let answerSeven




// Set answerEight to the appropriate season based on what MONTH is set to
//
// For example, if MONTH is 'January', answerEight should be 'Winter'
//
// The below table shows the season for each range of months:
//
// March to May: Spring
// June to August: Summer
// September to November: Autumn
// December to February: Winter
//
// Run the test after changing the value of MONTH to check you've covered every month correctly
const MONTH = 'January'

let answerEight

if(MONTH === "December" || MONTH === "January" || MONTH === "February"){
  answerEight = "Winter"
} else if (MONTH === "March" || MONTH === "April" || MONTH === "May"){
  answerEight = "Spring"
} else if (MONTH === "June" || MONTH === "July" || MONTH === "August"){
  answerEight = "Summer"
} else if (MONTH === "September" || MONTH === "October" || MONTH === "November"){
  answerEight = "Autumn"
}



module.exports = {
  answerOne,
  answerTwo,
  answerThree,
  answerFour,
  answerFive,
  answerSix,
  answerSeven,
  MONTH,
  answerEight
}
