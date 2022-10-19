import { Component } from '@angular/core';
import { HelloServiceService } from './hello-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ServerlessApp';
  newData:any;
  constructor (private  _apiservice: HelloServiceService) {

  }
  getHello() {
    this._apiservice.getData().subscribe(data => {
      this.newData = data;
    })
  }
  getServerlessHello() {
    this._apiservice.getDataFromServerless().subscribe(data => {
      this.newData = data;
    })
  }
}
