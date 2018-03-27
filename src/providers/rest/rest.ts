import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {
	
  private searchStr = '';	
  private restKey = 'hbqCUGF2QViV5Kh1eiWAa5rH225FUw9HYxRhatsh';
  private searchUrl = 'https://api.nal.usda.gov/ndb/search/?format=json&q='+this.searchStr+'&sort=n&max=10&offset=0&api_key='+this.restKey;
  private ndbno = '';

  constructor(public http: HttpClient) {
    console.log('Hello RestProvider Provider');
  }

  searchFoodItems(foodItem) {
  	this.searchStr = foodItem;
  	return this.http.get(this.searchUrl);
  }

  getBasicReport() {
  	this.ndbno = this.ndbno;
  	let basicReportUrl = 'http://api.nal.usda.gov/ndb/reports/?ndbno='+this.ndbno+'&type=f&format=json&api_key='+this.restKey;
  	return this.http.get(basicReportUrl); 
  }

  setNdbNumber(num) {
  	this.ndbno = num;
  }


}
