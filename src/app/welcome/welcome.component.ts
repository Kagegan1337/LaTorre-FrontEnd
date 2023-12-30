import {Component, EventEmitter, Output} from '@angular/core';
import {ButtonModule} from "primeng/button";
import {Router} from "@angular/router";

@Component({
  selector: 'app-welcome',
  standalone: true,
    imports: [
        ButtonModule
    ],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss'
})
export class WelcomeComponent {

    @Output() enableNavigation: EventEmitter<void> = new EventEmitter<void>;

    constructor(private router: Router) {
    }

    navigateToShop() {
        this.enableNavigation.emit();
        this.router.navigate(["/main"])
    }
}
