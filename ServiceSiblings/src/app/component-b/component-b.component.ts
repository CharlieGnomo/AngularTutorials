import { Component, OnInit } from '@angular/core';
import { InteractService } from '../services/interact.service';

@Component({
  selector: 'app-component-b',
  templateUrl: './component-b.component.html',
  styleUrls: ['./component-b.component.css']
})
export class ComponentBComponent implements OnInit {
  myVar: boolean;
  constructor(private interactService: InteractService) { }

  ngOnInit() {
    this.myVar = false;
    this.interactService.cambiar.subscribe(data => {
      console.log('componentB');
      this.myVar = this.myVar ? false : true;
    });
  }

}
