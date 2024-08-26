var body = document.querySelectorAll('body *');

// adding spans
var j = 0
for (var i = 0; i < body.length; i++) {
    var span = document.createElement('span')
    span.innerHTML = body[i].tagName
    span.setAttribute('class', 'inserted' + i)
    body[i].appendChild(span)
    body[i].setAttribute('class', 'inserting' + i + ' ' + body[i].className)
}

// style
var styles = ``
for (var i = 0; i < body.length; i++){
    styles = styles + `
    
    .inserted`+i+` {
        visibility: hidden;
        display: block;
        position: relative;
        left: 30px;
        border: 1px solid black;
        background: #eee;
        font-size: small;
        font-family: "Times New Roman", Times, serif;
        font-weight: 300;
        font-style: normal;
    }

    .inserting`+i+`:hover .inserted`+i+` {
        visibiliity:visible;
    }
    `
}

var style = document.createElement('style')
style.setAttribute('src','injecting.css')
stylesheet = style.sheet

for (var i = 0; i < body.length; i++){
    //stylesheet.addRule(".inserted"+i, "visibility: hidden;display: block;position: relative;left: 30px;border: 1px solid black;background: #eee;font-size: small;font-family: 'Times New Roman', Times, serif;font-weight: 300;font-style: normal;")

    stylesheet.addRule(".inserted"+i,":hover .inserted"+i, `visibiliity:visible;`)
}

document.head.appendChild(style)
