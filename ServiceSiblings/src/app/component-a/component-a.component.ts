import { Component, OnInit } from '@angular/core';
import { InteractService } from '../services/interact.service';

@Component({
  selector: 'app-component-a',
  templateUrl: './component-a.component.html',
  styleUrls: ['./component-a.component.css']
})
export class ComponentAComponent implements OnInit {
  myVariable : boolean;
  constructor(private interactService: InteractService) { }

  ngOnInit() {
    
  }

  clickEvent() {
    console.log('componentA');
    this.interactService.cambiar.emit();
  }

}
