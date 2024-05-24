let btncadastrar = document.querySelector('#btncadastrar');
var tabela = document.querySelector('#tabela')
let Dom = document.querySelector('#Dom')
let Seg = document.querySelector('#Seg')
let Ter = document.querySelector('#Ter')
let Qua = document.querySelector('#Qua')
let Qui = document.querySelector('#Qui')
let Sex = document.querySelector('#Sex')
let Sab = document.querySelector('#Sab')
let contadorid = 0;

let BD = [];

btncadastrar.onclick = function () {
    let nomecomida = document.querySelector('#comida').value;
    let dias = document.querySelector('#dias').value;

    let novacomida = {
        nomecomida: nomecomida,
        id: contadorid
    };

    contadorid++;
    BD.push(novacomida);

    let novalinha =
        `
        <div>
        <tr>
            <td>
                ${novacomida.nomecomida}
                <button id="btnexcluir_${novacomida.id}" onclick = 'Excluir(${novacomida.id})'>Excluir</button>
            </td>    
        </tr>
        <br>
        </div>
        `;

    switch (dias) {
        case 'domingo':
            Dom.innerHTML += novalinha
            break;

        case 'segunda':
            Seg.innerHTML += novalinha
            break

        case 'terca':
            Ter.innerHTML += novalinha
            break

        case 'quarta':
            Qua.innerHTML += novalinha
            break

        case 'quinta':
            Qui.innerHTML += novalinha
            break

        case 'sexta':
            Sex.innerHTML += novalinha
            break

        case 'sabado':
            Sab.innerHTML += novalinha
            break

    }

};

function Excluir(id) {
    let linha = document.getElementById(`btnexcluir_${id}`).parentNode;
    linha.parentNode.removeChild(linha);

    BD = BD.filter(comida => comida.id !== id);
}

