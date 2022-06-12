// This is the link to this JavaScript Coding Challenge
// https://www.codewars.com/kata/5839edaa6754d6fec10000a2/train/javascript

function findMissingLetter(array){
    // We declare the aplhabet letters
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';

    // We create a new array arrnew so we can loop each item in the array and convert them all to lower case
    arrnew = []
    for(let eachvalue of array){
        arrnew.push(eachvalue.toLowerCase())
    }

    // In this array, we push the indices of each letter when it detects an equality with the alphabet array
    arrletters = []
    for(i=0; i<=arrnew.length-1; i++){
        for(j=0; j<=alphabet.length-1; j++){
            // console.log(array[i], alphabet[j])
            if(arrnew[i] == alphabet[j]){
                // console.log(j)
                arrletters.push(j)
            }
        }
    }

    // console.log(arrnew)
    // console.log(arrletters)

    // We now use the for loop to detect that on each increment the only difference is 1, and if not we push the number of the correct element which satisfies the if condition
    missingletters = []
    for(i=0; i<=arrletters.length-2; i++){
        // console.log(arrletters[i], arrletters[i+1])
        if(Math.abs(arrletters[i]-arrletters[i+1]) != 1){
            // console.log(arrletters[i]+1, i)
            missingletters.push(alphabet[arrletters[i]+1])
        }
    }
    console.log(`array=[${array}]\nMissing letter/s\n${missingletters}`)
}
findMissingLetter(["a","b","c","d","f",'z'])
console.log('========')
findMissingLetter(['o','q','r','s','z'])
console.log('========')
findMissingLetter(["O","Q","R","S"])