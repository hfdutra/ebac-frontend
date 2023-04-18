import months from './months.js'
import filmes from './filmes.js'

/* // Filtra meses
const filteredMonths = months.filter( (months)=> {
    return months.days === 31
})

console.log(filteredMonths)

let toPrint = ''

// Lista meses
filteredMonths.forEach(month => {
   toPrint += month.month + ', '
});

// for( let c = 0; c < filteredMonths.length; c++ ){

// }

let meses = [30,30,30] // array comum

// Reduce - função com todos os itens do array e devolve um valor único
let sumMonthDays = filteredMonths.reduce( (prev, next) => {
    return {days: prev.days + next.days}
})

// Map - funções em arrays de retorno individual (cada valor array)
let cachorros = [10, 15, 7, 8, 9]

let years = cachorros.map( (cachorro => {
    return cachorro * 7
}))

document.getElementById('main').innerHTML = 
    toPrint + '<br> Soma dos dias dos meses selecionados: ' 
    + sumMonthDays.days + '<br> idade humana dos cachorros: '  
    + years + ' '
 */

const atributosEValores = document.querySelector('#atributos-e-valores');

filmes.reduce((acumulador, filme) => {
    const liFilme = document.createElement('li');
    liFilme.innerHTML = `<h4>${filme.titulo}</h4><ul></ul>`;
    const ulAtributos = liFilme.querySelector('ul');

    const atributos = Object.entries(filme);

    const liAtributos = atributos.map(([atributo, valor]) => {
        const liAtributo = document.createElement('li');
        liAtributo.innerHTML = `<strong>${atributo}:</strong> ${valor}`;
        return liAtributo;
    });

    liAtributos.forEach(li => ulAtributos.appendChild(li));
    acumulador.appendChild(liFilme);
    return acumulador;

}, atributosEValores);
