import { Component, OnInit } from '@angular/core';
import { BackendService } from './backend.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  title = 'clase-uno';
  persona: any;

  constructor(private readonly backendService: BackendService){}

  ngOnInit(): void {
    this.persona = this.backendService.obtenerDato(1);
    console.log({
      datosPersona: this.persona
    })
  }

}
