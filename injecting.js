//Accessing header element
var header = document.querySelectorAll('body *')[0];
var linebreak = document.createElement("br")
linebreak.setAttribute('id',"inserted3")

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
input.style.width = '394px'
input.style.height = '30px'
button.insertAdjacentElement("beforebegin",input)

/*
//Getting some text
var text = document.getElementsByClassName("jsl10n localized-slogan")[0]

//Button function
button.addEventListener('click', () => {
    text.textContent = input.value
})*/