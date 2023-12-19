import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {ArticleDto} from "../model/article-dto";
import {ArticleMockService} from "../indata/article-mock.service";
import {of} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ArticleServiceService {

    constructor(private articleMock: ArticleMockService) {
    }

    private backendUrl: string = environment.apiUrl;


    loadArticlesForCategory(category: string) {
        return of(this.articleMock.articles);

        // let params = new HttpParams();
        // params = params.set('category', category);
        //return this.http.get<ArticleDto[]>(this.backendUrl + '/articles', {params: params})
    }
}
