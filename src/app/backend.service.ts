import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor() { }

  obtenerDato(id: number){
    return {
      nombre: 'Sergio',
      apellido: 'Pizarro'
    };
  }

}
