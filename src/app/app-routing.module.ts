//import { NgModule } from '@angular/core';
//import { RouterModule, Routes } from '@angular/router';

//import { CommonModule } from '@angular/common';
//import { CategoryComponent } from './category/category.component';
//import { AuthorComponent } from './author/author.component';
//import { PublisherComponent } from './publisher/publisher.component';
//import { BookComponent } from './book/book.component';


//const routes: Routes = [
//  {
//    path: 'category', data: { title: 'Category' },
//    children: [{ path: '', component: CategoryComponent }]
//  },
//  {
//    path: 'author', data: { title: 'Author' },
//    children: [{ path: '', component: AuthorComponent }]
//  },
//  {
//    path: 'publisher', data: { title: 'Publisher' },
//    children: [{ path: '', component: PublisherComponent }]
//  },
//  {
//    path: 'book', data: { title: 'Book' },
//    children: [{ path: '', component: BookComponent }]
//  }

//];
//@NgModule({
//  imports: [CommonModule, RouterModule.forRoot(routes)],
//  exports: [RouterModule],
//  declarations: []
//})
//export class AppRoutingModule { }
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { CategoryComponent } from './category/category.component';
import { AuthorComponent } from './author/author.component';
import { PublisherComponent } from './publisher/publisher.component';
import { BookComponent } from './book/book.component';
import { HomeComponent } from './home/home.component'; // Import the HomeComponent

const routes: Routes = [
  {
    path: 'home', data: { title: 'Home' },
    children: [{ path: '', component: HomeComponent }] // Add the Home route
  },
  {
    path: 'category', data: { title: 'Category' },
    children: [{ path: '', component: CategoryComponent }]
  },
  {
    path: 'author', data: { title: 'Author' },
    children: [{ path: '', component: AuthorComponent }]
  },
  {
    path: 'publisher', data: { title: 'Publisher' },
    children: [{ path: '', component: PublisherComponent }]
  },
  {
    path: 'book', data: { title: 'Book' },
    children: [{ path: '', component: BookComponent }]
  },
  {
    path: '', redirectTo: '/home', pathMatch: 'full' // Redirect the default path to Home
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
