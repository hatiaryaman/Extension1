var body = document.querySelectorAll('body *');

function info(e) {
    return "<"+e.tagName + " id='" + e.id + "' class='" + e.className + "'></" + e.tagName + ">"
}

var spans = []

for (let i = 0; i < body.length; i++){
    var span = document.createElement('span')
    span.textContent = info(body[i])
    span.setAttribute('id', 'inserted' + i)
    span.style.visibility = "hidden"

    //Styel stuff
    span.style.position = "absolute"
    span.style.fontSize = "12px"
    span.style.fontFamily = "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif"
    span.style.backgroundColor = "DeepSkyBlue"
    span.style.padding = "5px"
    span.style.border = "1px solid black"
    span.style.zIndex = '1000';
    span.style.width = "200px"
    span.style.height = "20px"
    span.style.textAlign = "center"

    spans.push(span)
}

for (let i = 0; i < body.length; i++) {
    body[i].appendChild(spans[i])

    body[i].addEventListener("mouseover", function (event){
        event.stopPropagation();
        console.log(info(body[i]))
        spans[i].style.visibility = 'visible';
    })

    body[i].addEventListener("mouseleave", function (event){
        event.stopPropagation();
        spans[i].style.visibility = 'hidden';
    })
}