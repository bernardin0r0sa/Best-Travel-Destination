import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../service/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  travelOptions ={
    type:["Solo","Family","Friends","Couple"],
    entertainment:[],
    cost:[]
  }
  countries:any =[];
  query={}
  queryString:any;
  curentOption={
    name:"type",
    nextOption:"entertainment"
  }

  constructor(private apiService: ApiService, public router: Router) { }

  ngOnInit() {
  }

  getOptions(param,type,nextType){
    this.updateQuery(param,type);
    if (nextType == "none") { this.goToCountryFind();}
    else{
      this.apiService.getCountries(this.queryString).subscribe((data)=>{
        this.countries = data;
        this.fillArray(this.countries,nextType);
        this.checkIfHaveOptions(nextType);
        console.log(this.travelOptions);
      })
    }
  }

   fillArray(array,type){
    let elementTemp:any;
    array.forEach(element => {
       if(Array.isArray(element[type])) {
         this.fillArray(element[type],type);
        }else {
          if ( typeof element[type] == "string") {
            elementTemp=element[type];
          } else {
            elementTemp=element;
          }
        if(this.travelOptions[type].indexOf(elementTemp) === -1 && String(elementTemp).length>0) {
          this.travelOptions[type].push(elementTemp);
       }
      }
     });

   }

   updateQuery(param,type){
     this.query[type]=param;
     this.queryString = Object.keys(this.query).map(key => key + '=' + this.query[key]).join('&');
   }

   checkIfHaveOptions(type){
     if (this.travelOptions[type].length>0){
        this.updatecurentOption(type);
     }
   }

   updatecurentOption(optionName){
      this.curentOption.name=optionName;
      this.curentOption.nextOption=this.getNextOption(optionName);
   }

   getNextOption(type){
    switch (type) {
      case 'type':
        return 'entertainment';
      case 'entertainment':
        return 'cost';
      case 'cost':
        return 'none';
    }
   }

   goToCountryFind(){
     this.router.navigate(['/country-find/', this.queryString]);
   }
}
