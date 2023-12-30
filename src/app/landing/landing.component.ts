import { Component } from '@angular/core';
import {CardModule} from "primeng/card";
import {Router, RouterOutlet} from "@angular/router";
import {NavigationComponent} from "../menu/navigation/navigation.component";
import {ButtonModule} from "primeng/button";

@Component({
  selector: 'app-landing',
  standalone: true,
    imports: [
        CardModule,
        RouterOutlet,
        NavigationComponent,
        ButtonModule
    ],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {

    constructor(private router: Router) {
    }

    navigatToShop() {
        this.router.navigate(['main'])
    }
}
