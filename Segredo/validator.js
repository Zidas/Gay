function validator(){
    const password  = document.getElementById('password').value;
    const erro = document.getElementById('erroId');
    // console.log(password);


    if(password === "010524"){
        console.log('funcionou 010524');
        window.location.href = "viado.html"; 

    }
    else{
        erro.classList.remove('erro-not');
        setTimeout(clear, 3000);
        console.log('nao funcionou');
    }
    
    
}

function clear(){
    const erro = document.getElementById('erroId');
    erro.classList.add('erro-not');
}

     