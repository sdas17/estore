import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HeaderComponent } from './component/header/header.component';
import { CatNavigationComponent } from './component/cat-navigation/cat-navigation.component';



@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    CatNavigationComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
