import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CardModule} from "primeng/card";
import {NgOptimizedImage} from "@angular/common";
import {DropdownChangeEvent, DropdownModule} from "primeng/dropdown";
import {ArticleDetailsDto, PricePerTypeDto} from "../../model/article-details-dto";
import {GalleriaModule} from "primeng/galleria";
import {FormsModule} from "@angular/forms";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";

@Component({
    selector: 'app-article-detail',
    standalone: true,
    imports: [
        CardModule,
        NgOptimizedImage,
        DropdownModule,
        GalleriaModule,
        FormsModule,
        ButtonModule,
        RippleModule
    ],
    templateUrl: './article-detail.component.html',
    styleUrl: './article-detail.component.scss'
})
export class ArticleDetailComponent {

    public articleDetailsDto: ArticleDetailsDto = {} as ArticleDetailsDto;
    protected dropDownModel: PricePerTypeDto = {} as PricePerTypeDto;
    @Output() onClose: EventEmitter<void> = new EventEmitter;
    chosenArticle: PricePerTypeDto = {} as PricePerTypeDto;

    name() {
        return this.checkDto() ? this.articleDetailsDto.name : "Fallback-Article"
    }

    description() {
        return this.checkDto() ? this.articleDetailsDto.description : "";
    }

    images() {
        return this.checkDto() ? this.articleDetailsDto.imageUrls : [];
    }

    dropdownOptions() {
        return this.checkDto() ? this.articleDetailsDto.prices : [];
    }

    onChanged(event: DropdownChangeEvent) {
        this.dropDownModel = event.value;
    }

    getFormattedPrice() {
        return this.dropDownModel.price !== undefined && this.dropDownModel.price !== null ? this.dropDownModel.price.toLocaleString('de-DE', {
            style: 'currency',
            currency: 'EUR'
        }) : "";
    }

    private checkDto() {
        return this.articleDetailsDto !== undefined && this.articleDetailsDto !== null;
    }
}
