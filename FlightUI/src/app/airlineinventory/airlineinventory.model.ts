import { NgForm, FormGroup, Validators, FormBuilder, FormControl } from "@angular/forms";

export class AirlineInventory {
    
    flighNo:string='';
    airlineId:number=0;
    frmPlace:string='';
    toPlace:string='';
    strtDate:string='';
    endDate:string='';
    scheduleId:number=0;
    instrument:string='';
    noOfSeats:number=0;
  	noOfBCSeats:number=0;
	noOfNBCSeats:number=0;
	ticketCost:number=0;
	noOfRows:number=0;
	meal:string='';
	trip:string='';
	toPlaceId:number=0;
	fromPlaceId:number=0;
    
    
    // id: number = 0;
    // customerCode: string = '';
    // customerName: string = '';
    // customerAmount: number = 0;
    // formCustomerGroup: FormGroup;//Create
    // constructor() {
    //     var _builder = new FormBuilder();
    //     this.formCustomerGroup = _builder.group({});
    //     this.formCustomerGroup.addControl("CustomerNameControl", new FormControl('', Validators.required));

    //     var validationcollection = [];
    //     validationcollection.push(Validators.required);
    //     validationcollection.push(Validators.pattern("^[0-9]{4,4}$"))
    //     this.formCustomerGroup.addControl("CustomerCodeControl", new FormControl('', Validators.compose(validationcollection)));

    }
