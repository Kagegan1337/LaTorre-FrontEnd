import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MainComponent} from "./shop/main/main.component";
import {NavigationComponent} from "./menu/navigation/navigation.component";

@Component({
  selector: 'app-root',
  standalone: true,
    imports: [RouterOutlet, MainComponent, NavigationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'la-torre-customer';
}
