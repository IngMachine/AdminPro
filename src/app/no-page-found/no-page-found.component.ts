import { Component } from '@angular/core';

@Component({
  selector: 'app-no-page-found',
  templateUrl: './no-page-found.component.html',
  styleUrl: './no-page-found.component.scss'
})
export class NoPageFoundComponent {
  year: number = new Date().getFullYear();
}
