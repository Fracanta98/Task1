import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Oggetto } from '../../models/oggetto';
import { OggettoService } from '../../services/oggetto-service';

@Component({
  selector: 'app-lista',
  imports: [FormsModule, CommonModule],
  templateUrl: './lista.html',
  styleUrl: './lista.css',
})
export class Lista implements OnInit{
  elenco: Oggetto[] = [];    //l'html prenderà direttamente da queste variabili che verranno lavorate subito con 
  testoDiRicerca: string = "";// l'ngModule nell'html si riferisce a questa variabile 
  filtrati: Oggetto[] = []; //l'array che verrà effettivamente stampato a schermo

  constructor(private service: OggettoService) {}

 ngOnInit() { //inizializza instantaneamente altrimenti si poteva usare "ngAfterView"
  this.service.recupera().then(lista => { //then viene eseguito quando la promise viene risolta con successo(lista è 
    // il risultato della funzione recupera quindi l'array del file json)
    this.elenco = lista; //elenco mantiene tutti i file non filtrati potrei farne a meno?(tanto reinvoco sempre recupera)
    this.filtrati = lista; //gli elemnti filtrati verrano mostrati nel file html
  }).catch(err => console.error('Errore di caricamento:', err));//essendo il file json in locale probabilmente questo errore
                                                                //non si verificherà mai 
}

ricerca(){
  this.filtrati = this.service.ricercaPerOrdine(
    this.elenco,
    this.testoDiRicerca
  );

}


}
