import {Component, EventEmitter, Output} from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';
import {MainComponent} from "./shop/main/main.component";
import {NavigationComponent} from "./menu/navigation/navigation.component";
import {ButtonModule} from "primeng/button";
import {NgIf} from "@angular/common";
import {WelcomeComponent} from "./welcome/welcome.component";

@Component({
  selector: 'app-root',
  standalone: true,
    imports: [RouterOutlet, MainComponent, NavigationComponent, ButtonModule, NgIf, WelcomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'la-torre-customer';



  constructor(private router: Router) {
  }

    showNavigation() {
      return this.router.url !== "/";
    }
}
