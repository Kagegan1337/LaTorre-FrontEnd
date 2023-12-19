import {Component, Input} from '@angular/core';
import {CardModule} from "primeng/card";
import {NgOptimizedImage} from "@angular/common";
import {ArticleDto} from "../../model/article-dto";

@Component({
  selector: 'app-aritcle',
  standalone: true,
    imports: [
        CardModule,
        NgOptimizedImage
    ],
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss'
})
export class ArticleComponent {
    @Input() article: ArticleDto = {} as ArticleDto;

    public getFormattedPrice() {
        return this.article.price.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' });
    }

    public name() {
        return this.checkDto() ? this.article.name : "Fallback-article";
    }

    public image() {
        return this.checkDto() ? this.article.imageUrl : "";
    }

    public description() {
        return this.checkDto() ? this.article.description : "fallback-description"
    }

    public price() {
        return this.checkDto() ? this.getFormattedPrice() : "N/A"
    }

    private checkDto() {
        return this.article !== undefined && this.article !== null;
    }


}
