import { Component, signal } from '@angular/core';
import { Dashborad } from "./page/dashborad/dashborad";


@Component({
  selector: 'app-root',
  imports: [Dashborad],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('customer-app');
}
