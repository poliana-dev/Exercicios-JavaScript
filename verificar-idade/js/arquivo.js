function verificar(){
    //pegou o ano do sistema 
    var anoSistema= new Date(); 
    var anoAtual= anoSistema.getFullYear();
    
    var anoNascimento= document.getElementById('anoNasc'); //pegou o ano inserido pelo usuário
    var anoNasc= Number(anoNascimento.value) //convertendo para numero
    var res= document.querySelector('article#resultado');

    if(anoNasc>anoAtual || anoNasc<0){
        res.innerHTML='Ano de nascimento <strong>INVÁLIDO</strong>'
    }
    

}
