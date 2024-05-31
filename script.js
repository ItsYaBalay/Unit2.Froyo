
/**
 * @param {userInputString} string a string of flavor names separated by commas
 * @returns {flavorArr} the array of flavors
 */
const stringToArray = (string) => {
    return string.split(",")
}

/**
 * @param {flavorArr} orderArr an array of flavors
 * @returns {flavors} an object containing the flavors as the keys and the count as the value
 */
const countFlavors = (orderArr) => {
    const flavors = {
        vanilla: 0,
        chocolate: 0,
        strawberry: 0,
        coffee: 0
    }

    for(let i = 0; i < orderArr.length; i++){
        if(orderArr[i] === "vanilla"){
            flavors.vanilla++
        }else if(orderArr[i] === "chocolate"){
            flavors.chocolate++
        }else if(orderArr[i] === "strawberry"){
            flavors.strawberry++
        }else if(orderArr[i] === "coffee"){
            flavors.coffee++
        }
    }

    return flavors;
}

/*
 * 
 */

const userInputString = prompt(
    "Please enter the list of Froyo flavors you wish to order(separated by commas)."
  );

console.log(countFlavors(stringToArray(userInputString)))




