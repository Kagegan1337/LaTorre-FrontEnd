import { Component } from '@angular/core';
import {CardModule} from "primeng/card";
import {RouterOutlet} from "@angular/router";
import {NavigationComponent} from "../menu/navigation/navigation.component";

@Component({
  selector: 'app-landing',
  standalone: true,
    imports: [
        CardModule,
        RouterOutlet,
        NavigationComponent
    ],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {

}
