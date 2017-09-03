import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, ActionSheetController } from 'ionic-angular';

@IonicPage()
@Component({
	selector: 'page-district',
	templateUrl: 'district.html',
})
export class DistrictPage {

	constructor(
		public navCtrl: NavController, 
		public navParams: NavParams,
		private toastCtrl: ToastController,
		public actionSheetCtrl: ActionSheetController
	) {
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad DistrictPage');
	}

	getItemDetail() {
		
	}

	saveItem(item) {
		let toast = this.toastCtrl.create({
		    message: '你已儲存樓盤 ' + item,
		    duration: 3000,
		    position: 'top'
		  });

		  toast.onDidDismiss(() => {
		    // console.log('Dismissed toast');
		  });

		  toast.present();
	}

	more(item) {
		let actionSheet = this.actionSheetCtrl.create({
			buttons: [
			{
				text: '舉報',
				role: 'destructive',
				handler: () => {
					console.log('回報 clicked');
				}
			},
			{
				text: '分享',
				handler: () => {
					console.log('分享 clicked');
				}
			},
			{
				text: '取消',
				role: 'cancel',
				handler: () => {
					console.log('取消 clicked');
				}
			}
			]
		});
		actionSheet.present();
	}
}
