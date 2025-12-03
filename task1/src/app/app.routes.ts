import { Routes } from '@angular/router';
import { Lista } from './components/lista/lista';

export const routes: Routes = [
     { path: "", redirectTo: "lista", pathMatch: "full"},
     {path: 'lista', component: Lista}, //reinderizzo direttamente al componente lista
];
