import { Component } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { category } from '../types/category.types';

@Component({
  selector: 'app-side-navigation',
  templateUrl: './side-navigation.component.html',
  styleUrls: ['./side-navigation.component.scss']
})
export class SideNavigationComponent {
  categories: category[] = [];
  constructor(categoryService: CategoryService) {
    this.categories = categoryService.getAllCategories();
  }

  getCategories(parentCategoryId?: number): category[] {
    return this.categories.filter(
      (category) => category.parent_category_id === parentCategoryId
    );
  }
}
