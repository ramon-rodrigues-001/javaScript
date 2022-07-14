var div = document.body.querySelector('div#div')

function clicar_01() {
    var input_01 = document.body.querySelector('input#input-txt-01')
    div.style.background = `${input_01.value}`
}

function clicar_02() {
    var input_02 = document.body.querySelector('input#input-txt-02')
    div.style.color = `${input_02.value}`
}