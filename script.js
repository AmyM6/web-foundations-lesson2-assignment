function arrayFilter(sentence) {
    // create an empty array
    let result = [];

    // split() the sentence into array of words
    let newSentence = sentence.split(" ");
    console.log(newSentence);

    // use for loop to loop through the word array to remove 3 characters or less
    for (let i = 0; i < newSentence.length; i++) {
        // use conditional statment to check the length of each array in the loop
        if (newSentence[i].length > 3) {
            // push any items that meet the condition into the empty array
            result.push(newSentence[i]);
        }
    }

    // join() the words of the new array back into a sentence
    let newStr = result.join(" ");
    console.log(newStr)



}

arrayFilter("London is a big city in the United Kingdom")
// should return "London city United Kingdom"