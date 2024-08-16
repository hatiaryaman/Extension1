//Accessing header element
var header = document.getElementsByClassName("central-textlogo__image sprite svg-Wikipedia_wordmark")[0];
const linebreak = document.createElement("br")

//Creating new button
var button = document.createElement("button");
var buttonText = document.createTextNode("click")
button.setAttribute('id', 'inserted2')
button.appendChild(buttonText)

//Adds the button
header.insertAdjacentElement("beforebegin", button)
// adds a line break so the button is not on the same line as the wiki header
header.insertAdjacentElement("beforebegin", linebreak)

//Creating new input
var input = document.createElement("input")
input.setAttribute('id', 'inserted1')
input.setAttribute('placeholder',"Type here")
button.insertAdjacentElement("beforebegin",input)

//Getting some text
var text = document.getElementsByClassName("jsl10n localized-slogan")[0]

//Button function
button.addEventListener('click', () => {
    text.textContent = input.value
})