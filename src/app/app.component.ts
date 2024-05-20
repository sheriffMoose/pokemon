import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <div class="backdrop hidden"></div>
    <img class="logo" src="assets/logo.png" alt="Pokemon Logo" />
    <router-outlet />
  `,
})
export class AppComponent {
  title = 'pokemon';
}
