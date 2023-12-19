import {Component} from '@angular/core';
import {ArticleComponent} from "../components/aritcle/article.component";
import {NgForOf} from "@angular/common";
import {ActivatedRoute, Router} from "@angular/router";
import {ArticleServiceService} from "../service/article-service.service";
import {ArticleDto} from "../model/article-dto";
import {DialogModule} from "primeng/dialog";
import {LoadingComponent} from "../menu/loading/loading.component";

@Component({
    selector: 'app-article-page',
    standalone: true,
    imports: [
        ArticleComponent,
        NgForOf,
        DialogModule,
        LoadingComponent
    ],
    templateUrl: './article-page.component.html',
    styleUrl: './article-page.component.scss'
})
export class ArticlePageComponent {
    protected articles: ArticleDto[] = [];
    protected showLoading: boolean = false;

    constructor(private activatedRoute: ActivatedRoute,
                private router: Router,
                private articleService: ArticleServiceService) {
    }

    ngOnInit() {
        this.activatedRoute.queryParamMap.subscribe(params => {
            const category = params.get('0')
            if(category !== null) {
                this.showLoading = true;
                this.loadArticles(category).subscribe({
                    next: value => {
                        this.articles = value;
                        this.showLoading = false;
                    },
                    error: () => {
                        this.showLoading = false;
                    }
                });
            } else {
                this.router.navigate(['categories'])
            }
        })
    }

    private loadArticles(category: string) {
        return this.articleService.loadArticlesForCategory(category);
    }
}
