import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-sarang',
  templateUrl: './sarang.page.html',
  styleUrls: ['./sarang.page.scss'],
})
export class SarangPage implements OnInit {
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
      'https://api.npoint.io/e41c14a68954abd8b696',
      true
    );
    req.send();
  }
}
