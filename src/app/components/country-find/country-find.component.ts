import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../service/api.service';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-country-find',
  templateUrl: './country-find.component.html',
  styleUrls: ['./country-find.component.css']
})
export class CountryFindComponent implements OnInit {

  Country:any = [];

  constructor(private apiService: ApiService,private actRoute: ActivatedRoute) { 
  }

  ngOnInit() {
    let parameters = this.actRoute.snapshot.paramMap.get('param');
    this.findCountries(parameters);

  }

  findCountries(parameters){
    this.apiService.getCountries(parameters).subscribe((data) => {
     this.Country = data;
    })    
  }

}
