var butao = document.body.querySelector('button#butao')
butao.addEventListener('click', clicar)

function clicar() {
    var select = document.querySelector('select#select')

    var input_txt = document.querySelector('input#input')
    var input_number = Number(input_txt.value)

    select.innerHTML = ''
    for (var c = 1; c <= 10; c++) {
        select.innerHTML += `<option value="${c}">${input_number} x ${c} = ${input_number * c}</option>`
    }
}