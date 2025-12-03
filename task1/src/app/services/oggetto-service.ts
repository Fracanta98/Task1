import { Injectable } from '@angular/core';
import { Oggetto } from '../models/oggetto';
import {value} from '../../../public/response.json' //importo solo l'array che mi serve dal file JSON
//la dicitura "../" mi premette di tornare indietro di una cartella rispetto a dove si trova questo file 

@Injectable({
  providedIn: 'root',
})
export class OggettoService {
    async recupera(): Promise<Oggetto[]> { //perchè funziona solo con async se la funzione all'atto pratico non lo è?
      //(forse per la struttura dell'ngOnInit nel component con il then catch)
    
    let risultato: Oggetto[] = value; //assegno all'array risultato il valore dell'array del file json (value)

    return risultato; //a sto punto potrei direttamente provare con "return value;"

  }

  ricercaPerOrdine(risultati: Oggetto[], r: string): Oggetto[]{ // r è il dato che l'utente inserisce, in lista.ts questo dato
                                                                // è chiamato testoDiRicerca
    if(!r || r.trim() === "") //controlla se l'imput di ricerca è esistente o valido (.trim toglie gli spazi dalla stringa)
      return risultati; //se l'imput è inesistente o non valido ritorna tutta la lista non filtrata

    const a = r.toLowerCase();
    return risultati.filter(f => f.SalesOrder?.toLocaleLowerCase().includes(a)); //.toLowerCase è un controllo in più ma  
    //dovrebbe funzionare anche senza in quanto in questo caso lavoriamo con caratteri numerici.
    //se non mi riferissi dirttamente a f.SalesOrder o se qusto non fosse una stringa 
    //potrei utilizzare "return risultati.filter(f => f.SalesOrder?.toString().toLocaleLowerCase().includes(a));"
    //in modo tale da trasformare in stringa ed agevolarmi il confronto

  }

   
  
}
