import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  title = 'Tour of Heroes';
  heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado','Joel'];
  myHero = this.heroes[0]+" and "+this.heroes[3];


  constructor(public navCtrl: NavController) {

  }
}
