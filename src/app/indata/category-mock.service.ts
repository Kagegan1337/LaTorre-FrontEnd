import {Injectable} from '@angular/core';
import {CategoryDto} from "../model/category-dto";

@Injectable({
    providedIn: 'root'
})
export class CategoryMockService {

    private desc: string = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At"
    private imageUrl: string = "assets/img/categoy.jpg"
    categories: CategoryDto[] = [
        {name: "c-1", description: this.desc, imageUrl: this.imageUrl},
        {name: "c-2", description: this.desc, imageUrl: this.imageUrl},
        {name: "c-3", description: this.desc, imageUrl: this.imageUrl},
        {name: "c-4", description: this.desc, imageUrl: this.imageUrl},
        {name: "c-5", description: this.desc, imageUrl: this.imageUrl},
        {name: "c-6", description: this.desc, imageUrl: this.imageUrl},
        {name: "c-7", description: this.desc, imageUrl: this.imageUrl},
        {name: "c-8", description: this.desc, imageUrl: this.imageUrl},
    ]
}
