import {Injectable} from '@angular/core';
import {ArticleDetailsDto, PricePerTypeDto} from "../model/article-details-dto";

@Injectable({
    providedIn: 'root'
})
export class ArticleDetailsMockService {
    private image: string = "assets/img/fallback.jpg"
    private image_2: string = "assets/img/category.jpg"
    private sizes: PricePerTypeDto[] = [
        {type: "Lorem", price: 13.37},
        {type: "ipsum", price: 12.26},
        {type: "dolor", price: 11.15},
        {type: "sit", price: 14.48},
        {type: "amet", price: 15.59},
        {type: "consetetur", price: 16.61},
        {type: "sadipscing", price: 17.72}
    ]
    private images: string[] = [this.image, this.image_2, this.image, this.image_2, this.image]

    private articleDetailsDto: ArticleDetailsDto = {
        name: "Fallback",
        description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam",
        imageUrls: this.images,
        prices: this.sizes
    }

    constructor() {
    }

    loadDetailsForId() {
        return this.articleDetailsDto;
    }
}
