import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-bhaumik',
  templateUrl: './bhaumik.page.html',
  styleUrls: ['./bhaumik.page.scss'],
})
export class BhaumikPage implements OnInit {
  constructor(public loadingController: LoadingController) {
    this.fetchData()
  }
  response

  ngOnInit() {
    this.presentLoadingWithOptions()
  }

  async presentLoadingWithOptions() {
    const loading = await this.loadingController.create({
      spinner: null,
      duration: 100,
      message: 'Wait Karo...',
      translucent: true,
      cssClass: 'custom-class custom-loading'
    });
    return await loading.present();
  }
  fetchData() {
    let req = new XMLHttpRequest();

    req.onreadystatechange = () => {
      if (req.readyState == XMLHttpRequest.DONE) {
        this.response = JSON.parse(req.responseText)
        console.log(this.response);
      }
    };

    req.open(
      'GET',
      'https://api.npoint.io/a91fbc40ced6b3d21e22',
      true
    );
    req.send();
  }
}
