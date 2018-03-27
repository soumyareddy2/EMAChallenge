import { Component } from '@angular/core';
import { RestProvider } from '../../providers/rest/rest';
import { NavController } from 'ionic-angular';
import { App, ViewController } from 'ionic-angular';

/**
 * Generated class for the BasicreportComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'basicreport',
  templateUrl: 'basicreport.html'
})
export class BasicreportComponent implements OnInit{  

  text: string;
  basicReport : any;

  constructor(private restProvider : RestProvider, 
      public viewCtrl: ViewController,
      public appCtrl: App) {
  }

  ngOnInit() {
    this.getBasicReport();
  }

  getBasicReport() : void {
  	this.restProvider.getBasicReport().subscribe(
  			basicReport => this.basicReport = basicReport);
  }

  backToList() : void {
  	this.appCtrl.getRootNav().pop(BasicreportComponent);
  }

}
