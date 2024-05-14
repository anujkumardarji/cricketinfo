import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-captains',
  templateUrl: './captains.page.html',
  styleUrls: ['./captains.page.scss'],
})
export class CaptainsPage implements OnInit {

  response
  constructor(private router: Router, public loadingController: LoadingController) { this.fetchData() }

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
  onProfileClick(player) {
    this.router.navigateByUrl(`/${player}`);
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
      'https://api.npoint.io/63ddd9e1334ef417c6e7',
      true
    );
    req.send();
  }

}
