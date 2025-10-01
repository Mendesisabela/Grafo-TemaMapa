export class Grafo {
 constructor() {
 this.adj = {}; // lista de adjacência
 this.coords = {}; // coordenadas das cidades
 }
 adicionarCidade(nome, lat, lng) {
 if(!this.adj[nome]){
 this.adj[nome] = [];
 this.coords[nome] = [lat, lng];
 }
 }
 adicionarRota(origem, destino) {
 if(this.adj[origem] && this.adj[destino]){
 if(!this.adj[origem].includes(destino)){
 this.adj[origem].push(destino);
 }
 if(!this.adj[destino].includes(origem)){
 this.adj[destino].push(origem);
 }
 }
 }
 grau(cidade) {
 if(this.adj[cidade]){
 return this.adj[cidade].length;
 }
 return 0;
 }

}