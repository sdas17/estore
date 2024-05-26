import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HeaderComponent } from './component/header/header.component';
import { CatNavigationComponent } from './component/cat-navigation/cat-navigation.component';
import { SideNavigationComponent } from './component/side-navigation/side-navigation.component';
import { ProductsComponent } from './component/products/products.component';



@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    CatNavigationComponent,
    SideNavigationComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
