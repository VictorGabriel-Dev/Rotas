import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Cards } from "./cards/cards";
import { Filtro } from "./filtro/filtro";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Cards, Filtro],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Rotas');
}
