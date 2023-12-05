var perguntas = [
    {
        pergunta: 'Pergunta 1',
        alternativas: [
            'Alternativa 1',
            'Alternativa 2',
            'Alternativa 3',
            'Alternativa 4',
            'Alternativa 5'
        ]
    },
    {
        pergunta: 'Pergunta 2',
        alternativas: [
            'Alternativa 1',
            'Alternativa 2',
            'Alternativa 3',
            'Alternativa 4',
            'Alternativa 5'
        ]
    },
    {
        pergunta: 'Pergunta 3',
        alternativas: [
            'Alternativa 1',
            'Alternativa 2',
            'Alternativa 3',
            'Alternativa 4',
            'Alternativa 5'
        ]
    },
    {
        pergunta: 'Pergunta 5',
        alternativas: [
            'Alternativa 1',
            'Alternativa 2',
            'Alternativa 3',
            'Alternativa 4',
            'Alternativa 5'
        ]
    },
]

function redirectToAnotherPage(url) {
    window.location.href = url
}

function logInto() {
    var valueEmail = document.getElementById('email').value;
    var valuePassword = document.getElementById('password').value;

    if (valueEmail != '' && valuePassword != '') {
        redirectToAnotherPage('../html/form.html')
    } else {
        alert('Preencha os campos de email e senha.')
    }
}

function insertQuestions() {
    var div = document.getElementsByClassName("aspecto")
    for (var i = 0;i < div.length;i++) {
        box = div[i]
        for (var j = 0;j < perguntas.length;j++) {
            var pergunta = perguntas[j]
            var alternativas = pergunta['alternativas']
            box.innerHTML += `<h4>${pergunta['pergunta']}</h4>`
            for (var k = 0;k < alternativas.length;k++) {
                box.innerHTML += `<label for="aspect${i}-pergunta${j}-alternativa${k}"><input type="radio" id="aspect${i}-pergunta${j}-alternativa${k}" name="aspect${i}-pergunta${j}">${alternativas[k]}</label>`  
            }
        }
    }
}

insertQuestions()

function showBox(id) {
    var div = document.querySelector(`#aspecto${id}`)
    var icon = document.querySelector(`#box${id}`)

    var open = div.style.display == "flex"
    div.style.display = open ? "none" : "flex"
    icon.src = open ? "../images/chevron-down.svg" : "../images/chevron-up.svg"
}

// git add . ; git commit -m "update" ; git push origin main