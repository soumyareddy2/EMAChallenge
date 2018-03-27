import { Component,ViewChild } from '@angular/core';
import { RestProvider } from '../../providers/rest/rest';
import { NavController } from 'ionic-angular';
import { App, ViewController } from 'ionic-angular';
import { BasicreportComponent } from '../basicreport/basicreport';

/**
 * Generated class for the FoodlistComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'foodlist',
  templateUrl: 'foodlist.html'
})
export class FoodlistComponent{
  foodItems : any;
  foodItem : string;

  constructor(private restProvider : RestProvider,
      public viewCtrl: ViewController,
      public appCtrl: App) {
  }

  searchFoodItems() : void {
  	if(this.foodItem && this.foodItem !='') {
  		this.restProvider.searchFoodItems(this.foodItem).subscribe(
  			foodItems => {
          this.foodItems = foodItems;
        });
  	}
  	else {
  		alert('Please enter search string');
  	}
  }

  navigateToBasicReport(fi) : void {
    this.restProvider.setNdbNumber(fi.ndbno);
    this.appCtrl.getRootNav().push(BasicreportComponent);
  }

}
