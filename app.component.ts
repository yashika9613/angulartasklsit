import { Component } from '@angular/core';
import { ListtaskService } from './services/listtask.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'task';
  Search :any;
  tasklist :any;
  constructor ( private tasklistData :ListtaskService){

    tasklistData.getlist()

    .subscribe((data)=>{;
   this.tasklist=data;
    });

  }





  }






