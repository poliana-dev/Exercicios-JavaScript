function verificar(){
    //pegou o ano do sistema 
    var anoSistema= new Date(); 
    var anoAtual= anoSistema.getFullYear();
    
    var anoNascimento= document.getElementById('anoNasc'); //pegou o ano inserido pelo usuário
    var anoNasc= Number(anoNascimento.value) //convertendo para numero
    var res= document.querySelector('article#resultado');
    var genero= document.getElementsByName('sexo');
    var img = document.getElementById('foto')
    var caixa= document.getElementById('caixa')
   
    var idade= anoAtual-anoNasc

    //teste para o usuario não inserir ano de nascimento maior que o ano atual e ano de nascimento menor que zero
    if(anoNasc>anoAtual || anoNasc<=0){
        res.innerHTML='Ano de nascimento <strong>INVÁLIDO</strong>.<br>Verifique se você preencheu os dados corretamente.'
    //masculino
    }else if(genero[0].checked){
        document.body.style.background='#057e95'
        document.body.style.color= 'white'
        caixa.style.color= 'black'
        
        if(idade>=4 && idade<=13){
            genero= 'garotinho'
        }else if(idade>=14 && idade<=19){
            genero= 'rapaz'
        }else if(idade>=20 && idade<=59){
            genero= 'homem'
        }else if(idade<4){
            genero= 'bebê'
        }else{
            genero= 'idoso'
        }
        res.innerHTML=`Você é um ${genero} de ${idade} anos`
    //feminino
    }else{
        document.body.style.background= '#970e6f'
        document.body.style.color= 'white'
        caixa.style.color= 'black'

        if (idade<4){
            genero= 'bebê'
        }else if(idade>=4 && idade<=13){
            genero= 'garotinha'
        }else if(idade>=14 && idade<=19){
            genero= 'moça'
        }else if(idade>=20 && idade<=59){
            genero= 'mulher'
        }else{
            genero= 'idosa'
        }
        res.innerHTML=`Você é uma ${genero} de ${idade} anos`
        
    }
    res.style.textAlign= 'center'
    res.style.paddingRight= '3.5em'
    
    


}
