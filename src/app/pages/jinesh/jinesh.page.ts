import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-jinesh',
  templateUrl: './jinesh.page.html',
  styleUrls: ['./jinesh.page.scss'],
})
export class JineshPage implements OnInit {

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
      'https://api.npoint.io/79dd5687e54337748344',
      true
    );
    req.send();
  }
}
