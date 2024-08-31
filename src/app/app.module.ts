import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryComponent } from './category/category.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CategoryService } from './category/category.service';
import { RootComponent } from './root/root.component';
import { HomeComponent } from './home/home.component';

import { AuthorComponent } from './author/author.component';
import { PublisherComponent } from './publisher/publisher.component';
import { BookComponent } from './book/book.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    RootComponent,
    HomeComponent,
    PublisherComponent,
    AuthorComponent,  
    BookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [CategoryService, HttpClientModule],

  bootstrap: [AppComponent]
})
export class AppModule { }
