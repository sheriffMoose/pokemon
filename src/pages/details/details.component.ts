import { NgFor, UpperCasePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Pokemon } from 'pokenode-ts';
import { CardComponent } from './../card/card.component';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CardComponent, NgFor, UpperCasePipe, RouterLink],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss',
})
export class DetailsComponent {
  @Input() details!: Pokemon;
  @Input() showAsModal = false;

  showBack() {
    return true;
  }
}
