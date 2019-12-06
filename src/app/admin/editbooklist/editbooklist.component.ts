import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BookService } from '../book.service';

@Component({
  selector: 'app-editbooklist',
  templateUrl: './editbooklist.component.html',
  styleUrls: ['./editbooklist.component.css']
})
export class EditbooklistComponent implements OnInit {
  
  bookings:any[];
  booking:Booking ={ 
    book_name: '',
    book_author: '',
    book_status: '',
  }
  constructor(private bookService:BookService,public route:ActivatedRoute,
    public router:Router) { }

  ngOnInit() {
    this.getBook();
  }
  id = this.route.snapshot.params['id'];  
  getBook(){
    this.bookService.getBook(this.id)
        .subscribe((responses) =>{
          this.booking=responses;
          console.log('Data Successfully Fetched!',);
        })
  }

  updateBooks(){
    this.bookService.updateBooks(this.id,this.booking) 
        .subscribe((response:Booking[])=>
        this.bookings=response
        ) 
  }

}

interface  Booking{
  book_name?: string;
  book_author?: string;
  book_status?: string;
}


