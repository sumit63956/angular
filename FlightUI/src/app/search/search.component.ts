import { HttpClient, HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { Search } from './search.model';
import { SearchRec } from './searchrec.model';

@Component({
  //selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent {

  constructor(private http: HttpClient) {


  }

  ngOnInit(): void {
  }
  SearchModel: Search = new Search();
  SearchModels: Array<SearchRec> = new Array<SearchRec>();
 

  GetFromServer(res: any) {
    console.log(res);
    this.SearchModels = res;
  }

  Searchbypnr() {

    var pnr = this.SearchModel.pnrno;
    var pnrurl = "https://localhost:44354/api/Search/searchbypnr/" + pnr;

    //var airlineId= air.airlineId;
    //let httparms = new HttpParams().set("airlineId", air.airlineId);
    //let options = { params: httparms };
    //this.http.get(pnrurl).subscribe(res => console.log(res), res => console.log(res));
    this.http.get(pnrurl).subscribe(res => this.GetFromServer(res), res => console.log(res));

  }

  Searchbyemail() {
    var pnremail = this.SearchModel.emailId;
    var pnremailurl = "https://localhost:44354/api/Search/searchbyemail/" + pnremail;

    //var airlineId= air.airlineId;
    //let httparms = new HttpParams().set("airlineId", air.airlineId);
    //let options = { params: httparms };
    //this.http.get(pnrurl).subscribe(res => console.log(res), res => console.log(res));
    this.http.get(pnremailurl).subscribe(res => this.GetFromServer(res), res => console.log(res));


  }
}
