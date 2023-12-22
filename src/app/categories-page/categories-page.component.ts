import {Component} from '@angular/core';
import {ArticleComponent} from "../components/aritcle/article.component";
import {CategoryComponent} from "../components/category/category.component";
import {CategoryDto} from "../model/category-dto";
import {CategoryServiceService} from "../service/category-service.service";
import {NgForOf} from "@angular/common";

@Component({
    selector: 'app-categories-page',
    standalone: true,
    imports: [
        ArticleComponent,
        CategoryComponent,
        NgForOf
    ],
    templateUrl: './categories-page.component.html',
    styleUrl: './categories-page.component.scss'
})
export class CategoriesPageComponent {

    protected categories: CategoryDto[] = [];
    protected showLoading: boolean = false;

    constructor(private categoryService: CategoryServiceService) {
    }

    ngOnInit() {
        this.loadCategories();
    }

    public loadCategories() {
        this.showLoading = true;
        this.categoryService.loadAllCategories().subscribe({
            next: value => {
                this.categories = value;
                this.showLoading = false;
            },
            error: () => {
                this.showLoading = false;
            }
        })
    }

}
