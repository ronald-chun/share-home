import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {

	private myInput;
	constructor(public navCtrl: NavController) {

	}

	onInput() {
		console.log(this.myInput);
	}

	onCancel() {
		console.log(this.myInput);
	}

	getDistrictItems() {
		this.navCtrl.push('DistrictPage');
	}
}
