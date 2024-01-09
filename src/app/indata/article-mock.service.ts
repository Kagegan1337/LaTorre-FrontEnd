import {Injectable} from '@angular/core';
import {ArticleDto} from "../model/article-dto";

@Injectable({
    providedIn: 'root'
})
export class ArticleMockService {
    private desc: string = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At"
    private image: string = "assets/img/fallback.jpg"
    private sizes: string[] = ["Lorem", "ipsum", "dolor", "sit", "amet", "consetetur", "sadipscing"]
    // articles: ArticleDto[] = [
    //     {
    //         articleId: 0,
    //         name: "Fallback",
    //         description: this.desc,
    //         price: 13.37,
    //         imageUrl: this.image,
    //         category: "meat",
    //         sizes: this.sizes
    //     },
    //     {
    //         articleId: 1,
    //         name: "Fallback",
    //         description: this.desc,
    //         price: 13.37,
    //         imageUrl: this.image,
    //         category: "meat",
    //         sizes: this.sizes
    //     },
    //     {
    //         articleId: 2,
    //         name: "Fallback",
    //         description: this.desc,
    //         price: 13.37,
    //         imageUrl: this.image,
    //         category: "meat",
    //         sizes: this.sizes
    //     },
    //     {
    //         articleId: 3,
    //         name: "Fallback",
    //         description: this.desc,
    //         price: 13.37,
    //         imageUrl: this.image,
    //         category: "meat",
    //         sizes: this.sizes
    //     },
    //     {
    //         articleId: 4,
    //         name: "Fallback",
    //         description: this.desc,
    //         price: 13.37,
    //         imageUrl: this.image,
    //         category: "meat",
    //         sizes: this.sizes
    //     },
    //     {
    //         articleId: 5,
    //         name: "Fallback",
    //         description: this.desc,
    //         price: 13.37,
    //         imageUrl: this.image,
    //         category: "meat",
    //         sizes: this.sizes
    //     },
    //     {
    //         articleId: 6,
    //         name: "Fallback",
    //         description: this.desc,
    //         price: 13.37,
    //         imageUrl: this.image,
    //         category: "meat",
    //         sizes: this.sizes
    //     },
    //     {
    //         articleId: 7,
    //         name: "Fallback",
    //         description: this.desc,
    //         price: 13.37,
    //         imageUrl: this.image,
    //         category: "meat",
    //         sizes: this.sizes
    //     },
    //     {
    //         articleId: 8,
    //         name: "Fallback",
    //         description: this.desc,
    //         price: 13.37,
    //         imageUrl: this.image,
    //         category: "meat",
    //         sizes: this.sizes
    //     },
    //     {
    //         articleId: 9,
    //         name: "Fallback",
    //         description: this.desc,
    //         price: 13.37,
    //         imageUrl: this.image,
    //         category: "meat",
    //         sizes: this.sizes
    //     },
    //     {
    //         articleId: 10,
    //         name: "Fallback",
    //         description: this.desc,
    //         price: 13.37,
    //         imageUrl: this.image,
    //         category: "meat",
    //         sizes: this.sizes
    //     },
    //     {
    //         articleId: 11,
    //         name: "Fallback",
    //         description: this.desc,
    //         price: 13.37,
    //         imageUrl: this.image,
    //         category: "meat",
    //         sizes: this.sizes
    //     },
    //     {
    //         articleId: 12,
    //         name: "Fallback",
    //         description: this.desc,
    //         price: 13.37,
    //         imageUrl: this.image,
    //         category: "meat",
    //         sizes: this.sizes
    //     },
    //     {
    //         articleId: 13,
    //         name: "Fallback",
    //         description: this.desc,
    //         price: 13.37,
    //         imageUrl: this.image,
    //         category: "meat",
    //         sizes: this.sizes
    //     },
    //     {
    //         articleId: 14,
    //         name: "Fallback",
    //         description: this.desc,
    //         price: 13.37,
    //         imageUrl: this.image,
    //         category: "meat",
    //         sizes: this.sizes
    //     },
    //     {
    //         articleId: 15,
    //         name: "Fallback",
    //         description: this.desc,
    //         price: 13.37,
    //         imageUrl: this.image,
    //         category: "meat",
    //         sizes: this.sizes
    //     },
    //     {
    //         articleId: 16,
    //         name: "Fallback",
    //         description: this.desc,
    //         price: 13.37,
    //         imageUrl: this.image,
    //         category: "meat",
    //         sizes: this.sizes
    //     },
    //     {
    //         articleId: 17,
    //         name: "Fallback",
    //         description: this.desc,
    //         price: 13.37,
    //         imageUrl: this.image,
    //         category: "meat",
    //         sizes: this.sizes
    //     },
    //     {
    //         articleId: 18,
    //         name: "Fallback",
    //         description: this.desc,
    //         price: 13.37,
    //         imageUrl: this.image,
    //         category: "meat",
    //         sizes: this.sizes
    //     }
    //     ,
    //     {
    //         articleId: 18,
    //         name: "Fallback",
    //         description: this.desc2,
    //         price: 13.37,
    //         imageUrl: this.image,
    //         category: "meat",
    //         sizes: this.sizes
    //     }
    // ];

    constructor() {
    }
}
