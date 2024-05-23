import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from 'src/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CatNavigationComponent } from 'src/cat-navigation/cat-navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CatNavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
