import {Component, ViewChild} from '@angular/core';
import {ArticleComponent} from "../components/aritcle/article.component";
import {ActivatedRoute, Router} from "@angular/router";
import {ArticleServiceService} from "../service/article-service.service";
import {ArticleDto} from "../model/article-dto";
import {DialogModule} from "primeng/dialog";
import {LoadingComponent} from "../menu/loading/loading.component";
import {ArticleDetailComponent} from "../components/article-detail/article-detail.component";
import {NgForOf} from "@angular/common";
import {ArticleDetailsDto} from "../model/article-details-dto";

@Component({
    selector: 'app-article-page',
    standalone: true,
    imports: [
        ArticleComponent,
        DialogModule,
        LoadingComponent,
        ArticleDetailComponent,
        NgForOf,
    ],
    templateUrl: './article-page.component.html',
    styleUrl: './article-page.component.scss'
})
export class ArticlePageComponent {

    @ViewChild('articleDetailsDialog') detailsDialog?: ArticleDetailComponent

    protected articles: ArticleDto[] = [];
    protected showLoading: boolean = false;
    protected chosenArticle: ArticleDetailsDto = {} as ArticleDetailsDto;
    protected showArticle: boolean = false;


    constructor(private activatedRoute: ActivatedRoute,
                private router: Router,
                private articleService: ArticleServiceService) {
    }

    ngOnInit() {
        this.activatedRoute.queryParamMap.subscribe(params => {
            const category = params.get('0')
            if (category !== null) {
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

    showArticleDetails(article: ArticleDto) {
        const articleDetails = this.articleService.loadArticleDetails(article.articleId);
        if(articleDetails !== undefined && articleDetails !== null && this.detailsDialog) {
            this.detailsDialog.articleDetailsDto = articleDetails;
            this.showArticle = true;
        }
    }

    closeArticleDetails() {
        this.chosenArticle = {} as ArticleDetailsDto;
        this.showArticle = false;
    }
}
