//Mapa z nowymi inwestycjami
var map = L.map('interactive_map').setView([52.222920, 21.230119], 9);
L.tileLayer('https://api.mapbox.com/styles/v1/progress39/cjsn6p6xc1i3u1fp5ojm4wcc0/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoicHJvZ3Jlc3MzOSIsImEiOiJjanNuNmRqbmYwODVpNDNueXdhemVhM2poIn0.NCNzuoyp2M57xHtTrUSRKw', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
}).addTo(map);

//Znaczniki miejsc
var mainIcon = L.icon({
       iconUrl: 'https://cdn.iconscout.com/icon/free/png-256/building-city-high-tower-rise-isometric-grid-3d-32805.png',
       iconSize: [50, 50], // size of the icon
       });

//Każdy znacznik posiada własny adres
var planes = [
  ["Warszawska 141, Siedlce",52.166940, 22.283313],
  ["Osiedle pod Klonami, Łomianki",52.332970, 20.889077],
  ["Osiedle Spokój, Piaseczno",52.078869, 21.034370],
  ["Warszawska 185, Piaseczno",52.081723, 21.012129],
	["Bukowińska 34, Wołomin",52.342430, 21.239700],
	["Osiedle pod Kasztanami, Wołomin",52.346211, 21.228740]
	];

//Dodanie funkcji wyświetlania okienka "popup" po naciśnięciu na daną inwestycję na mapie
for (var i = 0; i < planes.length; i++) {
    	marker = new L.marker([planes[i][1],planes[i][2]], {icon: mainIcon})
    	.bindPopup(planes[i][0])
      .addTo(map);
    }

//Brak zmiany rozmiaru mapy przy skrollowaniu
if (map.scrollWheelZoom) {
  map.scrollWheelZoom.disable();
}

//Płynne przejścia do sekcji
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
