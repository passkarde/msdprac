

import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true, 
  templateUrl: './child.html'
})
export class Child {
  @Input() parentMessage!: string;
  @Output() childEvent = new EventEmitter<string>();

  sendMessage() {
    this.childEvent.emit("Hello Parent! This is Child.");
  }
}