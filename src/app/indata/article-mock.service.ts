import {Injectable} from '@angular/core';
import {ArticleDto} from "../model/article-dto";

@Injectable({
    providedIn: 'root'
})
export class ArticleMockService {
    private desc : string = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At"
    private image: string = "assets/img/fallback.jpg"
    articles : ArticleDto[] = [
        {name: "Fallback", description: this.desc,price:13.37,imageUrl:this.image,category:"meat"},
        {name: "Fallback", description: this.desc,price:13.37,imageUrl:this.image,category:"meat"},
        {name: "Fallback", description: this.desc,price:13.37,imageUrl:this.image,category:"meat"},
        {name: "Fallback", description: this.desc,price:13.37,imageUrl:this.image,category:"meat"},
        {name: "Fallback", description: this.desc,price:13.37,imageUrl:this.image,category:"meat"},
        {name: "Fallback", description: this.desc,price:13.37,imageUrl:this.image,category:"meat"},
        {name: "Fallback", description: this.desc,price:13.37,imageUrl:this.image,category:"meat"},
        {name: "Fallback", description: this.desc,price:13.37,imageUrl:this.image,category:"meat"},
        {name: "Fallback", description: this.desc,price:13.37,imageUrl:this.image,category:"meat"},
        {name: "Fallback", description: this.desc,price:13.37,imageUrl:this.image,category:"meat"},
        {name: "Fallback", description: this.desc,price:13.37,imageUrl:this.image,category:"meat"},
        {name: "Fallback", description: this.desc,price:13.37,imageUrl:this.image,category:"meat"},
        {name: "Fallback", description: this.desc,price:13.37,imageUrl:this.image,category:"meat"},
        {name: "Fallback", description: this.desc,price:13.37,imageUrl:this.image,category:"meat"},
        {name: "Fallback", description: this.desc,price:13.37,imageUrl:this.image,category:"meat"},
        {name: "Fallback", description: this.desc,price:13.37,imageUrl:this.image,category:"meat"},
        {name: "Fallback", description: this.desc,price:13.37,imageUrl:this.image,category:"meat"},
        {name: "Fallback", description: this.desc,price:13.37,imageUrl:this.image,category:"meat"},
        {name: "Fallback", description: this.desc,price:13.37,imageUrl:this.image,category:"meat"}
    ];
    constructor() {
    }
}
