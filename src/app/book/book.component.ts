import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { from, Observable } from 'rxjs';
import { BookService } from './book.service';
import { Book } from './book.model';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  allBooks: Observable<Book[]>=this.bookService.getAllBook();;
  bookForm: any;
book: Book | undefined; //modified
   bookIdUpdate = null;
 dataSaved = false;
  message = "";

  constructor(private formBuilder: FormBuilder, private routes: Router, private bookService: BookService) { }

  ngOnInit() {
   
    this.bookForm = this.formBuilder.group({
      bookName: ['', [Validators.required]],
      categoryId: [, [Validators.required]],
      publisherId: [, [Validators.required]],
      authorId: [, [Validators.required]],
      description:'',
      edition:'',
      price: [,[Validators.required]],
      isActive: [false]


    });
    this.loadBook();
 
  }



  loadBook() {
    this.allBooks = this.bookService.getAllBook();

  }
  deleteBookById(id: string) {
    if (confirm("Are You Sure To Delete This?")) {
      this.bookService.deleteBookById(id).subscribe(() => {
        this.dataSaved = true;
        this.message = "Record Deleted Successfully.";
        this.loadBook();
    
        this.bookForm.reset();
      })
    }
  }
  onFormSubmit() {
     this.dataSaved = false;
    const book = this.bookForm.value;
    this.createBook(book);

    

  }


  createBook(book: Book) {
  this.book = this.bookForm.value;
   
    if (this.bookIdUpdate == null) {
      this.bookService.createBook(book).subscribe(() => {
        this.loadBook();

      })
    }
    else {
      book.bookId = this.bookIdUpdate;
      this.bookService.updateBook(this.bookIdUpdate, book).subscribe(() => {

        this.loadBook();
        this.bookIdUpdate = null;
      })


    }


  }

  updateBook(book: Book,id:any) {
   this.bookService.updateBook(book,id)
  }


  loadBookToEdit(bookId: any) {
    this.bookService.getBookById(bookId).subscribe(book => {
      this.message = "";
      this.dataSaved = false;
      this.bookIdUpdate = book.bookId;
      this.bookForm.get('bookName').setValue(book['bookName']);
      this.bookForm.get('categoryId').setValue(book['categoryId']);
      this.bookForm.get('authorId').setValue(book['authorId']);
      this.bookForm.get('publisherId').setValue(book['publisherId']);

      this.bookForm.get('description').setValue(book['description']);
      this.bookForm.get('edition').setValue(book['edition']);
      this.bookForm.get('price').setValue(book['price']);
      this.bookForm.get('isActive').setValue(book['isActive']);
    });
  }

  resetForm() {
    this.bookForm.reset();
    this.message = "";
    this.dataSaved = false;
  }



}
