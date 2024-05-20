import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent implements OnInit {
  @Input() showAsModal = false;
  @Input() showBack = true;
  @Input() showSave = false;


  ngOnInit() {
    if (this.showAsModal) {
      document.querySelector('.backdrop')?.classList.remove('hidden');
    }
  }

  onBack() { }

  onClose() { }

  onSave() { }
}
