import {Component, EventEmitter, Input, Output, signal} from '@angular/core';
import {CardModule} from "primeng/card";
import {NgOptimizedImage} from "@angular/common";
import {ArticleDto} from "../../model/article-dto";
import {ButtonModule} from "primeng/button";

@Component({
  selector: 'app-aritcle',
  standalone: true,
    imports: [
        CardModule,
        NgOptimizedImage,
        ButtonModule
    ],
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss'
})
export class ArticleComponent {
    @Input() article: ArticleDto = {} as ArticleDto;
    @Output() showDetails : EventEmitter<void> = new EventEmitter<void>

    public getFormattedPrice() {
        return this.article.pooling.at(0)?.price.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' });
    }

    public name() {
        return this.checkDto() ? this.article.names.at(0) : "Fallback-article";
    }

    public image() {
        if(this.checkDto()){
            const path = this.article.images.at(0)?.path
            if(path) {
                return path;
            }

        }
        return "";
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


    emitDetails() {
        this.showDetails.emit();
    }
}
