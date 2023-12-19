import {Component} from '@angular/core';
import {ArticleComponent} from "../components/aritcle/article.component";
import {NgForOf} from "@angular/common";
import {CategoryComponent} from "../components/category/category.component";
import {CategoryMockService} from "../indata/category-mock.service";
import {CategoryDto} from "../model/category-dto";
import {CategoryServiceService} from "../service/category-service.service";

@Component({
    selector: 'app-categories-page',
    standalone: true,
    imports: [
        ArticleComponent,
        NgForOf,
        CategoryComponent
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
