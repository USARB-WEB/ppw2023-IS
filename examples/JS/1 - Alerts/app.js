alert('Hello! I am JavaScript and I am integrated in your browser!')

const name = prompt('What is your name?')
alert(`Hello ${name}!`)

const answer = confirm('Do you know JavaScript?')
if(answer === true) {
    alert('Great!')
} else {    
    alert('You should learn it!')
}