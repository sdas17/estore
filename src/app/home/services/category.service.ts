import { Injectable } from '@angular/core';
import { category } from '../component/types/category.types';
import { categories } from '../sampleData/category.data';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor() { }
  getAllCategories(): category[] {
    return categories;
  }
}
