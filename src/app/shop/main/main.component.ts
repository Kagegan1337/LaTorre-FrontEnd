import { Component } from '@angular/core';
import {ArticleComponent} from "../../components/aritcle/article.component";
import {NgForOf} from "@angular/common";
import {NavigationComponent} from "../../menu/navigation/navigation.component";
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-main',
  standalone: true,
    imports: [
        ArticleComponent,
        NgForOf,
        NavigationComponent,
        RouterOutlet
    ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
