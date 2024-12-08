const input = document.getElementById('text-input')
const button = document.getElementById('check-btn')
const output = document.getElementById('result')



function checker (){

    let word = input.value

   if(word){
    let reversedWord = word.split('').reverse().join('')

    if(word == reversedWord ){
        output.innerText = word + " is a Palindrome"
    }
    else if (word != reversedWord){
        output.innerText = word + " is NOT a Palindrome"
    }
   }
   else{
    alert("Wrong Input")
   }
}
