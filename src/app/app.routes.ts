import { Routes } from '@angular/router';
import {MainComponent} from "./shop/main/main.component";
import {LandingComponent} from "./landing/landing.component";
import {ArticlePageComponent} from "./article-page/article-page.component";
import {CategoriesPageComponent} from "./categories-page/categories-page.component";

export const routes: Routes = [
    {
        title:"Willkommen",
        component: LandingComponent,
        path:"welcome"
    },
    {
        path:"",
        component: MainComponent,
        title: "LaTorre"
    },
    {
        path:"articles",
        component: ArticlePageComponent
    },
    {
        path:"categories",
        component: CategoriesPageComponent
    }
];
