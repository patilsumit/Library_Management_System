import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-assignbook',
  templateUrl: './assignbook.component.html',
  styleUrls: ['./assignbook.component.css']
})
export class AssignbookComponent implements OnInit {

  books: any[];
  users:any[];
  booking: Booking = {
    username: '',
    book_details: '',
    due_date: '',
    dbtrans: '',

  }

  constructor(private bookservice: BookService, private route: Router) { }

  ngOnInit() {
    this.getBooks();
    this.getUsers();
  }

  getBooks(){
    this.bookservice.getBooks()
        .subscribe((responses:Booking[]) =>{
          this.books=responses;
          console.log('Data Successfully Fetched!',this.books);
        })
  }

  getUsers(){
    this.bookservice.getUsers()
        .subscribe((responses:Booking[]) =>{
          this.users=responses;
          console.log('Data Successfully Fetched!',this.users);
        })
  }

  addAssignBooks() {
    this.bookservice.assignBook(this.booking).subscribe((response) =>
   
    this.route.navigate(['/'])
      //  console.log("done")
    )
  }

  goBack() {
    this.route.navigate(['/'])

  }

}
interface Booking {
  username?: string;
  book_details?: string;
  due_date?: string;
  dbtrans?: string;
}