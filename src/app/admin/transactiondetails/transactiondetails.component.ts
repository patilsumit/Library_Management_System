import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transactiondetails',
  templateUrl: './transactiondetails.component.html',
  styleUrls: ['./transactiondetails.component.css']
})
export class TransactiondetailsComponent implements OnInit {

  transacions:any[];
  transacion:Transacion ={ 
    username: '',
    book_details: '',
    dbtrans: '',
    date:''
  }
  constructor(public bookService:BookService,public route:Router) { }

  ngOnInit() {
    this.getTransactions();
  }
  
  toLink(id){
    
     this.route.navigate(['admin/booklist/edit/',id]);
  }

  getTransactions(){
    this.bookService.getTransactions()
        .subscribe((responses:Transacion[]) =>{
          this.transacions=responses;
          console.log('Data Successfully Fetched!',);
        })
  }

  deleteTransaction(id){
    this.bookService.deleteTransaction(id)  
      .subscribe(()=>{ 
        this.getTransactions();
      });
  }

}
interface  Transacion{
  username?: string;
  book_details?: string;
  dbtrans?: string;
  date?: string;
}