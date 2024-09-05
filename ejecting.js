var body = document.querySelectorAll('body *');

for (let i = 0; i < body.length; i++){
    try {
        document.getElementById('inserted'+i).remove()
    } catch {

    }
}