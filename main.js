const form = document.getElementById('form-agenda');
const nomes = [];
const inputNome = document.getElementById('nome');
let formValido = false;

let linhas = '';

form.addEventListener('submit',function(e){
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
});

function validaNome(nome){
    const nomeCompleto = nome.split(' ');
    return nomeCompleto.length >= 2;
}


function adicionaLinha(){
    const inputTelefone = document.getElementById('telefone');

    formValido = validaNome(inputNome.value);

    if(!formValido){
        inputNome.style.border = '1px solid red';
        document.querySelector('.error-message').style.display = 'block';
    }else{
        if(nomes.includes(inputNome.value)){
            alert(`O cadastro do nome ${inputNome.value} já foi feito`);
    
        }else{
            nomes.push(inputNome.value);  
            
            let linha = '<tr>';
            
            linha += `<td> ${inputNome.value}</td>`;
            linha += `<td> ${inputTelefone.value}</td>`;
            linha += '</tr>'
    
            linhas += linha;
        }
      
          
        inputNome.style.border = 'none';
        document.querySelector('.error-message').style.display = 'none';

        inputNome.value = '';
        inputTelefone.value = '';
    }

    
}

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;

}

inputNome.addEventListener('keyup', function(e){
    console.log('ENTROU');
    formValido = validaNome(e.target.value);

    if(!formValido){
        inputNome.style.border = '1px solid red';
        document.querySelector('.error-message').style.display = 'block';
    }else{
        inputNome.style = '';
        document.querySelector('.error-message').style.display = 'none';
    }

});