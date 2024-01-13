import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {ArticleMockService} from "../indata/article-mock.service";
import {ArticleDetailsMockService} from "../indata/article-details-mock.service";
import {HttpClient, HttpParams} from "@angular/common/http";
import {ArticleDto} from "../model/article-dto";

@Injectable({
    providedIn: 'root'
})
export class ArticleServiceService {

    constructor(private articleMock: ArticleMockService,
                private articleDetailsMock: ArticleDetailsMockService,
                private http: HttpClient) {
    }

    private backendUrl: string = environment.apiUrl;


    loadArticlesForCategory(category: string) {

        return this.http.get<ArticleDto[]>(this.backendUrl + '/article/all', {})
    }

    loadArticleDetails(articleId: number) {
        return this.articleDetailsMock.loadDetailsForId()
    }
}
