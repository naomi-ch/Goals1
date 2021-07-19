import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Quote } from '../quote-class/quote';

@Injectable({
  providedIn: 'root'
})
export class QuoteRequestService {
  quote!:Quote; //'quote' property assigned to Quote class from 'quote.ts'

  constructor(private http:HttpClient) { //injected private http property of type HttpClient
    this.quote = new Quote("",""); //initialized with empty strings
   }
  
  quoteRequest() { //quoteRequest is a METHOD 
    interface ApiResponse { //defining an 'interface' to inform angular the kind of response we'll receive from the API
      quote:string;
      author:string;
  }
  let promise = new Promise((resolve,reject) => {
    this.http.get<ApiResponse>(environment.apiUrl).toPromise().then(response => {
      this.quote.quote = response.quote
      this.quote.author = response.author

      resolve(promise) //figure out whether to remove promise and add <void> next to 'new Promise'
    },
    error => {
      this.quote.quote = "Never, never, never give up"
      this.quote.author = "Winston Churchill"

      reject(error)
    
    })
  })
  return promise

  }
}
