import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { NewTask } from '../new-task/new-task';

import { Task } from '../../models/task';

import {AngularFire, FirebaseListObservable} from 'angularfire2';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  task: Task;
  tasks: FirebaseListObservable<any>;

  constructor(public navCtrl: NavController, af: AngularFire, public modalCtrl: ModalController) {
    this.task = new Task();
    this.tasks = af.database.list('/tasks');
    // this.tasks = af.database.list('/tasks', {
    //   query: {
    //     orderByChild: 'completed',
    //     equalTo: false
    //   }
    // });
    console.log(this.tasks);

    //Temporary task
    // this.tasks.push({
    //         name: 'test',
    //         completed: false
    //       });
  }

  addTask() {
    this.task.completed = false;
    console.log(this.task);
    this.tasks.push(this.task);
    this.task = { name: '', completed: false};
  }

  updateTask(item, key) {
    console.log(item, key);
    this.tasks.update(key, {
            completed: item.checked
          });
  }

  newTask() {
    let modal = this.modalCtrl.create(NewTask);
    modal.present();

    modal.onDidDismiss(data => {
      console.log('volvimos', data);
      if(data) {
        this.task = data;
        this.addTask();
      }
      
    });
  }

}
