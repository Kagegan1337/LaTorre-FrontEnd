import { Routes } from '@angular/router';
import {MainComponent} from "./shop/main/main.component";
import {LandingComponent} from "./landing/landing.component";
import {ArticlePageComponent} from "./article-page/article-page.component";
import {CategoriesPageComponent} from "./categories-page/categories-page.component";
import {WelcomeComponent} from "./welcome/welcome.component";
import {RecipeOverviewComponent} from "./recipe/recipe-overview/recipe-overview.component";

export const routes: Routes = [
    {
        title:"Willkommen",
        component: WelcomeComponent,
        path:""
    },
    {
        path:"la-torre",
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
    },
    {
        title:'Rezepte',
        path:'recipe',
        component: RecipeOverviewComponent
    }
];
