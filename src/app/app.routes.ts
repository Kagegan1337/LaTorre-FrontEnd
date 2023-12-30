import { Routes } from '@angular/router';
import {MainComponent} from "./shop/main/main.component";
import {ArticlePageComponent} from "./article-page/article-page.component";
import {CategoriesPageComponent} from "./categories-page/categories-page.component";
import {RecipeOverviewComponent} from "./recipe/recipe-overview/recipe-overview.component";
import {WelcomeComponent} from "./welcome/welcome.component";
import {NavigationComponent} from "./menu/navigation/navigation.component";

export const routes: Routes = [
    {
        path:"test",
        component:WelcomeComponent
    },
    {
        title: "LaTorre-Info",
        path:"main",
        component: MainComponent
    },
    {
        title: 'Sortiment',
        path:"articles",
        component: ArticlePageComponent
    },
    {
        title: 'Kategorien',
        path:"categories",
        component: CategoriesPageComponent
    },
    {
        title:'Rezepte',
        path:'recipe',
        component: RecipeOverviewComponent
    }
];
