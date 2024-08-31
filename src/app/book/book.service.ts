import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Book } from './book.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  url:string = environment.apiBaseUrl;
  constructor(private _http: HttpClient) { }

  getAllBook(): Observable<Book[]> {
    return this._http.get<Book[]>(this.url + '/Book/GetBooks');

  }
  getBookById(id: any): Observable<any> {
    return this._http.get<Book[]>(this.url + '/Book/GetBooks/' + id);
  }
  deleteBookById(id: string): Observable<number> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this._http.delete<number>(this.url + '/Book/DeleteBooks/' + id, httpOptions);
  }
  createBook(book: Book): Observable<Book> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this._http.post<Book>(this.url + '/Book/InsertBook/', book, httpOptions);
  }
  updateBook(id: any, book: Book): Observable<Book> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this._http.put<Book>(this.url + '/Book/UpdateBook/' + id, book, httpOptions);
  }
}
