import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient,public router:Router) { }
  
  getBook(id){
    return this.http.get(`/admin`+ '/' +id);
  }

  getBooks(){
    return this.http.get(`/admin`);
  }
  getTransactions(){
    return this.http.get(`/transdetails/transaction`);
  }
  getUsers(){
    return this.http.get(`/users`);
  }
  addBooking(books){
    return this.http.post(`/admin/addbooking`,books )
  }

   assignBook(books){ 
    return this.http.post(`/transdetails/assignbook`,books )
   }  

  deleteBooks(id){
    console.log(id)
    return this.http.delete(`/admin`+ '/' +id);  
  }
  deleteTransaction(id){
    return this.http.delete(`/transdetails/deltrans`+ '/' +id);  
  }
  updateBooks(id, info){
    this.router.navigate(['/admin/booklist']);
    
    return this.http.put(`admin`+ '/' +id,info);  
  }
}
