function bgChanger() {
    if (this.scrollY > this.innerHeight / 2) {
      document.body.classList.add("bgActive");
    } else {
      document.body.classList.remove("bgActive");
    }
  }
  
  window.addEventListener("scroll", bgChanger);

let nome = window.document.getElementById('exampleFormControlInput1') //pegue o ELEMENTO que tem o ID nome
let email = document.querySelector('#exampleFormControlInput2')
let assunto = document.querySelector('#exampleFormControlTextarea1')
let nomeOk = false
let emailOk = false
let assuntoOk = false

function validaNome() {
    let txtNome = document.querySelector('#txtNome')
        if(nome.value.length < 3) {
            txtNome.innerHTML = 'Nome Inválido'
            txtNome.style.color = 'red'
            
    }
        else{
            txtNome.innerHTML = 'Nome Válido'
            txtNome.style.color = 'green'
            nomeOk = true
    }

}

function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail')
        if(email.value.indexOf('@') == -1 || email.value.indexOf('.')==-1) { //se tem valor=1, s enão tem é -1
            txtEmail.innerHTML = 'Email Inválido'
            txtEmail.style.color = 'red'
    }
        else{
            txtEmail.innerHTML = 'Email Válido'
            txtEmail.style.color = 'green'
            emailOk = true
    }

}

function validaAssunto () {
    let txtAssunto = document.querySelector('#txtAssunto')
        if(assunto.value.length >= 100) { //se tem valor=1, s enão tem é -1
          txtAssunto.innerHTML = 'Texto é muito grande, digite no máximo 100 caracteres'   
          txtAssunto.style.color = 'red'
          txtAssunto.style.display ='block'
          assuntoOk = false
        }else{
            txtAssunto.style.display='none'
            assuntoOk = true
    }
}

function enviar() {
    if(nomeOk == true && emailOk == true && assuntoOk == true){
    alert('Formulário enviado com sucesso!')
    }else{
    alert('Preencha o formulário corretamente antes de enviar...')    
    }

}
