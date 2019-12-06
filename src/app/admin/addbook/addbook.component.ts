import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {
  
  books:any[];
  booking:Booking ={ 
    book_name: '',
    book_author: '',
    book_status: ''
  }

  constructor(private bookservice:BookService,private route:Router) { }

  ngOnInit() {
  }

  addBooks(){
    this.bookservice.addBooking(this.booking).subscribe((response)=>
        console.log("done")  
     )
  }
    goBack(){
    this.route.navigate(['/']) 
    
  }

}
interface  Booking{
  book_name?: string;
  book_author?: string;
  book_status?: string;
}