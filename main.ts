import {Serie} from './Serie.js';
import {series} from './data.js';

let serieTable : HTMLElement = document.getElementById('series')!;
console.log(series);
uploadRows();
let componentAverage: HTMLElement = document.getElementById('average')!;

componentAverage.innerHTML = `Seasons average: ${averageSeasons()}`;
let photo:HTMLElement = document.getElementById('imagen')!;
let tittle:HTMLElement = document.getElementById('titulo')!;
let description: HTMLElement = document.getElementById('descripcion')!;
let pgWeb: HTMLElement = document.getElementById('paginaWeb')!;


function uploadRows(): void{
    series.forEach((serie) => (createRow(serie)));
}
function createRow(serie:Serie):void{
    
    let row = document.createElement('tr');
    let card: HTMLElement = document.createElement("tr");
    card.setAttribute("class", "clickable");
    card.onclick = function () {
        cardP(serie);
    };
    card.innerHTML = `<td><b>${serie.id}</b></td>
    <td><a href="#Card ${serie.name}">${serie.name}</a></td>
    <td>${serie.channel}</td>
    <td>${serie.seasons}</td>`;
    serieTable.appendChild(card);
}




function averageSeasons():string{
    let sum = 0;
    series.forEach((serie)=> sum += serie.seasons);
    sum/= series.length;
    let average = Math.round(sum);
    return average.toString();
}

function cardP(serie:Serie):void{
   let photocard= document.getElementById('photocard')!;
   let picture:string = serie.img;
    photocard.innerHTML = `<img src="${picture}">
    <div class= "card-body">
    <h5 class="card-title">${serie.name}</h5>
    <p class="card-text">${serie.description}</p>
    <p class="card-action"><a href="${serie.url}" target="_blank">${serie.url}</a></p>
    </div>`;
   



}

