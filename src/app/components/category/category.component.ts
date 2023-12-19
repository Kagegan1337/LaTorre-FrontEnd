import {Component, Input} from '@angular/core';
import {CardModule} from "primeng/card";
import {NgOptimizedImage} from "@angular/common";
import {DialogModule} from "primeng/dialog";
import {CategoryDto} from "../../model/category-dto";

@Component({
  selector: 'app-category',
  standalone: true,
    imports: [
        CardModule,
        NgOptimizedImage,
        DialogModule
    ],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss'
})
export class CategoryComponent {

    @Input() category: CategoryDto = {} as CategoryDto;


    public name() {
        return this.checkDto() ? this.category.name : "Fallback-Category"
    }

    public image() {
        console.log(this.category.imageUrl)
        return this.checkDto() ? this.category.imageUrl : "assets/img/category.jpg"
    }

    public description() {
        return this.checkDto() ? this.category.description : "Fallback-desc"
    }

    private checkDto() {
        return this.category !== undefined && this.category !== null;
    }
}
