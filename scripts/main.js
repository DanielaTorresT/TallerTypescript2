import { series } from './data.js';
var serieTable = document.getElementById('series');
console.log(series);
uploadRows();
var componentAverage = document.getElementById('average');
componentAverage.innerHTML = "Seasons average: ".concat(averageSeasons());
var photo = document.getElementById('imagen');
var tittle = document.getElementById('titulo');
var description = document.getElementById('descripcion');
var pgWeb = document.getElementById('paginaWeb');
function uploadRows() {
    series.forEach(function (serie) { return (createRow(serie)); });
}
function createRow(serie) {
    var row = document.createElement('tr');
    var card = document.createElement("tr");
    card.setAttribute("class", "clickable");
    card.onclick = function () {
        cardP(serie);
    };
    card.innerHTML = "<td><b>".concat(serie.id, "</b></td>\n    <td><a href=\"#Card ").concat(serie.name, "\">").concat(serie.name, "</a></td>\n    <td>").concat(serie.channel, "</td>\n    <td>").concat(serie.seasons, "</td>");
    serieTable.appendChild(card);
}
function averageSeasons() {
    var sum = 0;
    series.forEach(function (serie) { return sum += serie.seasons; });
    sum /= series.length;
    var average = Math.round(sum);
    return average.toString();
}
function cardP(serie) {
    var photocard = document.getElementById('photocard');
    var picture = serie.img;
    photocard.innerHTML = "<img src=\"".concat(picture, "\">\n    <div class= \"card-body\">\n    <h5 class=\"card-title\">").concat(serie.name, "</h5>\n    <p class=\"card-text\">").concat(serie.description, "</p>\n    <p class=\"card-action\"><a href=\"").concat(serie.url, "\" target=\"_blank\">").concat(serie.url, "</a></p>\n    </div>");
}
