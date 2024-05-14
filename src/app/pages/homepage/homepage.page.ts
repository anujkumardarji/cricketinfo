import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.page.html',
  styleUrls: ['./homepage.page.scss'],
})
export class HomepagePage implements OnInit {

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
      duration: 200,
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
      'https://api.npoint.io/fb00b1a801f164e02abe',
      true
    );
    req.send();
  }

  //['Anuj',0,31,15,16,'48.38%','Kapil',0,30,18,12,'60%','Nayan',0,14,4,10,'28.57%','Krunal',0,30,17,13,'56.66%','Manish',0,30,15,15,'50%','Bhaumik',0,30,12,18,'40%','Sarang',0,29,15,14,'51.72%','Jinesh',0,32,18,14,'56.25%','Ahad',0,14,6,12,'42.85%']    ['Anuj',0,31,15,16,'48.38%','Kapil',0,30,18,12,'60%','Nayan',0,14,4,10,'28.57%','Krunal',0,30,17,13,'56.66%','Manish',0,30,15,15,'50%','Bhaumik',0,30,12,18,'40%','Sarang',0,29,15,14,'51.72%','Jinesh',0,32,18,14,'56.25%','Ahad',0,14,6,12,'42.85%']
  //1 kapil 60% Win 18/30
  //2 krunal 56.66% Win 17/30
  //3 Jinesh 56.25% Win 18/32
  //4 sarang 51.72% Win 15/29
  //5 manish 50% Win 15/30
  //6 anuj 48.38% Win 15/31
  //7 ahad 42.85% 6/14
  //8 bhaumik 40% 12/30
  //9 nayan 28.57% 4/14

}
