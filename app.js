import { Grafo } from './grafo.js';
// Criar grafo
const mapaRotas = new Grafo();
// === PARTE 1: adicionar cidades ===
mapaRotas.adicionarCidade('São Paulo', -23.5505, -46.6333);
mapaRotas.adicionarCidade('Rio de Janeiro', -22.9068, -43.1729);
mapaRotas.adicionarCidade('Belo Horizonte', -19.9167, -43.9345);
mapaRotas.adicionarCidade('Curitiba', -25.4284, -49.2733);

// === PARTE 2: adicionar rotas ===
mapaRotas.adicionarRota('São Paulo', 'Rio de Janeiro');
mapaRotas.adicionarRota('São Paulo', 'Belo Horizonte');
mapaRotas.adicionarRota('Belo Horizonte', 'Curitiba');

// Criar mapa Leaflet
const map = L.map('map').setView([-22.9, -43.2], 5);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
 attribution: '© OpenStreetMap',
}).addTo(map);

// Renderizar cidades
for (let cidade in mapaRotas.coords) {
 const [lat, lng] = mapaRotas.coords[cidade];
 const grau = mapaRotas.grau(cidade); // método incompleto
 L.marker([lat, lng])
 .addTo(map)
 .bindPopup(`<b>${cidade}</b><br>Conexões: ${grau}`);
}

// Renderizar rotas
for (let cidade in mapaRotas.adj) {
 mapaRotas.adj[cidade].forEach((destino) => {
 const [latA, lngA] = mapaRotas.coords[cidade];
 const [latB, lngB] = mapaRotas.coords[destino];
 L.polyline(
 [
 [latA, lngA],
 [latB, lngB],
 ],
 { color: 'blue' }
 ).addTo(map);
 });
}