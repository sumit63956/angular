import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Booking } from './booking.model';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html'
})
export class BookingComponent implements OnInit {

  constructor(private http: HttpClient) {


  }

  ngOnInit(): void {
  }
  BookingModel: Booking= new Booking();
  BookingModels: Array<Booking> = new Array<Booking>();


 
  BookTicket() {
    var bookingto = {
      name: this.BookingModel.name,
      emailId: this.BookingModel.emailId,
      gender: this.BookingModel.gender,
      age: Number(this.BookingModel.age),
      meal: this.BookingModel.meal,
      seatNo: Number(this.BookingModel.seatNo),
      flighNo: this.BookingModel.flighNo
    }
  //   console.log(airlineto);
  //   console.log(this.AirlineModel);
  //   //this.http.post("https://localhost:44364/api/v1.0/flight/airline/register", airlineto).subscribe(res => { this.GetCustomerData(); console.log(res) }, res => console.log(res));
  //   //this.http.post("https://localhost:44364/api/v1.0/flight/airline/register", airlineto).subscribe(res => console.log(res), res => console.log(res));
     this.http.post("https://localhost:44343/api/Booking/booking", bookingto).subscribe(res => console.log(res), res => console.log(res));
  
  //   this.AirlineModel = new Airline();
  //   //this.GetAirlineData();
  }
}
