import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.scss']
})
export class HijoComponent implements OnInit {


  @Input()
  nombre: string;

  @Input()
  apellido: string;

  constructor() { }


  ngOnInit() {
  }

}
