import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable()
export class InteractService {
  myVariable: boolean;
  @Output() cambiar : EventEmitter<boolean> = new EventEmitter();

  constructor() { }

}
