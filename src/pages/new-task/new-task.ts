import { Component } from '@angular/core';

import { IonicPage, NavController, NavParams, ViewController  } from 'ionic-angular';

import { Task } from '../../models/task';

@Component({
  selector: 'page-new-task',
  templateUrl: 'new-task.html',
})
export class NewTask {

  task: Task;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    this.task = new Task();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewTask');
  }

  addTask() {
    console.log(this.task);
    this.viewCtrl.dismiss(this.task);
  }

  close() {
    this.viewCtrl.dismiss();
  }

}
