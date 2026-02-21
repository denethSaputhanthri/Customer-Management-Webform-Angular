import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Loginform } from "./login/loginform/loginform";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Loginform],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('customer-app');
}
