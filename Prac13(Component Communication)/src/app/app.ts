import { Component } from '@angular/core';
import { Parent } from './parent/parent';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Parent], 
  template: `<app-parent></app-parent>` 
})
export class App {}