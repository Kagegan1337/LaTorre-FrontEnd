import { Injectable } from '@angular/core';
import {CategoryMockService} from "../indata/category-mock.service";
import {of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CategoryServiceService {

  constructor(private categoryMock: CategoryMockService) { }

    loadAllCategories() {
        return of(this.categoryMock.categories)
    }
}
