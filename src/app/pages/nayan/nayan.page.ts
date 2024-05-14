import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-nayan',
  templateUrl: './nayan.page.html',
  styleUrls: ['./nayan.page.scss'],
})
export class NayanPage implements OnInit {
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
      'https://api.npoint.io/0da464f1717364264f57',
      true
    );
    req.send();
  }

}
