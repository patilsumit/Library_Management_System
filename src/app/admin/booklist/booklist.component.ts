import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent implements OnInit {

  bookings:any[];
  booking:Booking ={ 
    book_name: '',
    book_author: '',
    book_status: '',
  }
  constructor(public bookService:BookService,public route:Router) { }

  ngOnInit() {
    this.getBooks();
  }
  
  toLink(id){
    
     this.route.navigate(['admin/booklist/edit/',id]);
  }

  getBooks(){
    this.bookService.getBooks()
        .subscribe((responses:Booking[]) =>{
          this.bookings=responses;
          console.log('Data Successfully Fetched!',);
        })
  }

  deleteBook(id){
    this.bookService.deleteBooks(id)  
      .subscribe(()=>{ 
        this.getBooks();
      });
  }

}
interface  Booking{
  book_name?: string;
  book_author?: string;
  book_status?: string;
}