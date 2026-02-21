import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Loginform } from "./login/loginform/loginform";
import { Hamepage } from "./home/hamepage/hamepage";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Loginform, Hamepage],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('customer-app');
}
